// scripts/generate-sitemap.ts
import * as fs from "node:fs";
import * as path from "node:path";

const baseUrl = process.env.BASE_URL || "https://sharang.tech";
const outDir = process.env.OUT_DIR || "out";

// Possible routes to scan
const possibleRoutes = ["src/app", "src/pages", "app", "pages"];

const routeDir = possibleRoutes.find((dir) => fs.existsSync(dir));
if (!routeDir) {
  console.error("❌ Could not find app/pages folder in src or root.");
  process.exit(1);
}

console.log(`🔍 Scanning routes from: ${routeDir}/`);

const IGNORED = [
  "api",
  "_middleware",
  "_app",
  "service",
  "_document",
  "layout.tsx",
  "template.tsx",
  "error.tsx",
];

function walkRoutes(dir: string, parentPath = ""): string[] {
  const routes: string[] = [];

  for (const entry of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, entry);
    const stat = fs.statSync(fullPath);

    if (IGNORED.includes(entry)) continue;

    if (stat.isDirectory()) {
      routes.push(...walkRoutes(fullPath, path.join(parentPath, entry)));
    } else if (
      entry === "page.tsx" ||
      entry === "page.jsx" ||
      entry.endsWith(".html") ||
      (!routeDir?.includes("app") && entry.endsWith(".tsx")) ||
      (!routeDir?.includes("app") && entry.endsWith(".js"))
    ) {
      const route = parentPath.replace(/\\/g, "/").replace(/\/page$/, "");
      routes.push(route);
    }
  }

  return routes;
}

function normalizeRoute(route: string): string {
  return route === "/" || route === "" ? "" : route.replace(/\/$/, "");
}

function getPriority(path: string): string {
  if (path === "") return "1.0";
  const depth = path.split("/").length;
  return depth <= 1 ? "0.8" : "0.5";
}

function getChangeFreq(path: string): string {
  if (path === "") return "weekly";
  if (path.includes("blog")) return "monthly";
  return "monthly";
}

function getLastModFromOutFile(route: string): string {
  const htmlFile = route === "" ? "index.html" : `${route}/index.html`;
  const outPath = path.join(outDir, htmlFile);
  if (fs.existsSync(outPath)) {
    return fs.statSync(outPath).mtime.toISOString();
  }
  return new Date().toISOString();
}

const rawRoutes = walkRoutes(routeDir);
const routes = Array.from(new Set(rawRoutes.map(normalizeRoute)));

const urls = routes.map((route) => {
  const loc = `${baseUrl}/${route}`.replace(/\/+$/, "");
  return {
    loc,
    lastmod: getLastModFromOutFile(route),
    priority: getPriority(route),
    changefreq: getChangeFreq(route),
  };
});

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
    .map(
      (u) => `<url>
  <loc>${u.loc}</loc>
  <lastmod>${u.lastmod}</lastmod>
  <changefreq>${u.changefreq}</changefreq>
  <priority>${u.priority}</priority>
</url>`
    )
    .join("\n")}
</urlset>`;

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "sitemap.xml"), sitemap);
console.log("✅ sitemap.xml generated");

const robots = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml
`;

fs.writeFileSync(path.join(outDir, "robots.txt"), robots);
console.log("✅ robots.txt generated");
