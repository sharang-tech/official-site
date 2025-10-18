"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// scripts/generate-sitemap.ts
var fs = require("node:fs");
var path = require("node:path");
var baseUrl = process.env.BASE_URL || "https://sharang.tech";
var outDir = process.env.OUT_DIR || "out";
// Possible routes to scan
var possibleRoutes = ["src/app", "src/pages", "app", "pages"];
var routeDir = possibleRoutes.find(function (dir) { return fs.existsSync(dir); });
if (!routeDir) {
    console.error("❌ Could not find app/pages folder in src or root.");
    process.exit(1);
}
console.log("\uD83D\uDD0D Scanning routes from: ".concat(routeDir, "/"));
var IGNORED = [
    "api",
    "_middleware",
    "_app",
    "service",
    "_document",
    "layout.tsx",
    "template.tsx",
    "error.tsx",
];
function walkRoutes(dir, parentPath) {
    if (parentPath === void 0) { parentPath = ""; }
    var routes = [];
    for (var _i = 0, _a = fs.readdirSync(dir); _i < _a.length; _i++) {
        var entry = _a[_i];
        var fullPath = path.join(dir, entry);
        var stat = fs.statSync(fullPath);
        if (IGNORED.includes(entry))
            continue;
        if (stat.isDirectory()) {
            routes.push.apply(routes, walkRoutes(fullPath, path.join(parentPath, entry)));
        }
        else if (entry === "page.tsx" ||
            entry === "page.jsx" ||
            entry.endsWith(".html") ||
            (!(routeDir === null || routeDir === void 0 ? void 0 : routeDir.includes("app")) && entry.endsWith(".tsx")) ||
            (!(routeDir === null || routeDir === void 0 ? void 0 : routeDir.includes("app")) && entry.endsWith(".js"))) {
            var route = parentPath.replace(/\\/g, "/").replace(/\/page$/, "");
            routes.push(route);
        }
    }
    return routes;
}
function normalizeRoute(route) {
    return route === "/" || route === "" ? "" : route.replace(/\/$/, "");
}
function getPriority(path) {
    if (path === "")
        return "1.0";
    var depth = path.split("/").length;
    return depth <= 1 ? "0.8" : "0.5";
}
function getChangeFreq(path) {
    if (path === "")
        return "weekly";
    if (path.includes("blog"))
        return "monthly";
    return "monthly";
}
function getLastModFromOutFile(route) {
    var htmlFile = route === "" ? "index.html" : "".concat(route, "/index.html");
    var outPath = path.join(outDir, htmlFile);
    if (fs.existsSync(outPath)) {
        return fs.statSync(outPath).mtime.toISOString();
    }
    return new Date().toISOString();
}
var rawRoutes = walkRoutes(routeDir);
var routes = Array.from(new Set(rawRoutes.map(normalizeRoute)));
var urls = routes.map(function (route) {
    var loc = "".concat(baseUrl, "/").concat(route).replace(/\/+$/, "");
    return {
        loc: loc,
        lastmod: getLastModFromOutFile(route),
        priority: getPriority(route),
        changefreq: getChangeFreq(route),
    };
});
var sitemap = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n".concat(urls
    .map(function (u) { return "<url>\n  <loc>".concat(u.loc, "</loc>\n  <lastmod>").concat(u.lastmod, "</lastmod>\n  <changefreq>").concat(u.changefreq, "</changefreq>\n  <priority>").concat(u.priority, "</priority>\n</url>"); })
    .join("\n"), "\n</urlset>");
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "sitemap.xml"), sitemap);
console.log("✅ sitemap.xml generated");
var robots = "User-agent: *\nAllow: /\n\nSitemap: ".concat(baseUrl, "/sitemap.xml\n");
fs.writeFileSync(path.join(outDir, "robots.txt"), robots);
console.log("✅ robots.txt generated");
