// Writes public/sitemap.xml from the shared route list. Runs on predev/prebuild.

import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { BASE_URL, publicRoutes } from "./routes.mjs";

const urls = publicRoutes.map((e) =>
  [
    "  <url>",
    `    <loc>${BASE_URL}${e.path}</loc>`,
    e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
    e.priority ? `    <priority>${e.priority}</priority>` : null,
    "  </url>",
  ]
    .filter(Boolean)
    .join("\n"),
);

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...urls,
  "</urlset>",
].join("\n");

writeFileSync(resolve("public/sitemap.xml"), xml + "\n");
console.log(`sitemap.xml written (${publicRoutes.length} entries)`);
