// scripts/generate-sitemap.ts
import fs from "fs";
import path from "path";

/**
 * CONFIGURATION
 */
const BASE_URL = process.env.BASE_URL || "https://sharang.tech";
const OUT_DIR = process.env.OUT_DIR || "out";
const POSSIBLE_ROUTE_DIRS = ["src/app", "src/pages", "app", "pages"];

const IGNORED = [
  "api",
  "_middleware",
  "_app",
  "_document",
  "layout.tsx",
  "template.tsx",
  "error.tsx",
  "service"
];

/**
 * STEP 1 — Detect route source directory
 */
const routeDir = POSSIBLE_ROUTE_DIRS.find((dir) => fs.existsSync(dir));
if (!routeDir) {
  console.error("❌ Could not find app/pages folder in src or root.");
  process.exit(1);
}
console.log(`🔍 Scanning routes from: ${routeDir}/`);

/**
 * STEP 2 — Recursive route discovery
 */
function walkRoutes(dir: string, parentPath = ""): string[] {
  const routes: string[] = [];

  for (const entry of fs.readdirSync(dir)) {
    if (IGNORED.includes(entry)) continue;

    const fullPath = path.join(dir, entry);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      routes.push(...walkRoutes(fullPath, path.join(parentPath, entry)));
      continue;
    }

    // Detect valid page files
    const isPageFile =
      entry === "page.tsx" ||
      entry === "page.jsx" ||
      entry === "index.tsx" ||
      entry === "index.jsx" ||
      entry.endsWith(".html") ||
      (!routeDir?.includes("app") &&
        (entry.endsWith(".tsx") || entry.endsWith(".js")));

    if (!isPageFile) continue;

    // Handle path formatting
    let route = parentPath.replace(/\\/g, "/");

    // Remove trailing /page
    route = route.replace(/\/page$/, "");

    // Remove trailing /index
    route = route.replace(/\/index$/, "");

    // Skip dynamic routes like [slug], [id]
    if (/\[.*?\]/.test(route)) continue;

    routes.push(route);
  }

  return routes;
}

/**
 * STEP 3 — Helpers for sitemap metadata
 */
function normalizeRoute(route: string): string {
  return route === "/" || route === "" ? "" : route.replace(/\/$/, "");
}

function getPriority(path: string): string {
  if (path === "") return "1.0";
  const depth = path.split("/").length - 1;
  if (depth === 1) return "0.8";
  if (depth === 2) return "0.6";
  return "0.5";
}

function getChangeFreq(path: string): string {
  if (path === "") return "weekly";
  if (path.includes("blog")) return "monthly";
  return "monthly";
}

function getLastModified(route: string): string {
  const htmlFile = route === "" ? "index.html" : `${route}/index.html`;
  const outPath = path.join(OUT_DIR, htmlFile);
  if (fs.existsSync(outPath)) {
    return fs.statSync(outPath).mtime.toISOString();
  }
  // fallback: if build not exported yet
  return new Date().toISOString();
}

/**
 * STEP 4 — Collect routes
 */
const rawRoutes = walkRoutes(routeDir);
const routes = [...new Set(rawRoutes.map(normalizeRoute))];

/**
 * STEP 5 — Build XML sitemap content
 */
const urls = routes.map((route) => {
  const loc = `${BASE_URL}/${route}`.replace(/\/+$/, "");
  return `
  <url>
    <loc>${loc}</loc>
    <lastmod>${getLastModified(route)}</lastmod>
    <changefreq>${getChangeFreq(route)}</changefreq>
    <priority>${getPriority(route)}</priority>
  </url>`;
});

const sitemapXML = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join("\n")}
</urlset>
`;

fs.mkdirSync(OUT_DIR, { recursive: true });
fs.writeFileSync(path.join(OUT_DIR, "sitemap.xml"), sitemapXML.trim());
console.log("✅ sitemap.xml generated");

/**
 * STEP 6 — Generate robots.txt
 */
const robotsTXT = `User-agent: *
Allow: /

Sitemap: ${BASE_URL}/sitemap.xml
`;

fs.writeFileSync(path.join(OUT_DIR, "robots.txt"), robotsTXT);
console.log("✅ robots.txt generated");

/**
 * Done!
 */
console.log(`✨ Sitemap and robots.txt created successfully in "${OUT_DIR}"`);
