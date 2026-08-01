// Build-time prerender: renders every public route to static HTML in dist/.
// Run after `vite build` (client) and `vite build --ssr` (server bundle).

import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { pathToFileURL } from "node:url";
import { publicRoutes } from "./routes.mjs";

const distDir = resolve("dist");
const serverEntry = resolve("dist/server/entry-server.js");

if (!existsSync(serverEntry)) {
  console.error("prerender: server bundle missing, skipping.");
  process.exit(0);
}

// Minimal browser-storage shim: some client SDKs touch localStorage at import time.
if (typeof globalThis.localStorage === "undefined") {
  const store = new Map();
  globalThis.localStorage = {
    getItem: (k) => (store.has(k) ? store.get(k) : null),
    setItem: (k, v) => void store.set(k, String(v)),
    removeItem: (k) => void store.delete(k),
    clear: () => store.clear(),
    key: (i) => [...store.keys()][i] ?? null,
    get length() {
      return store.size;
    },
  };
}

const { render } = await import(pathToFileURL(serverEntry).href);
const template = readFileSync(resolve(distDir, "index.html"), "utf-8");

// Tags that per-route head output replaces, so they are not duplicated.
function stripStaticHead(html, headTags) {
  let out = html;
  if (/<title[\s>]/i.test(headTags)) out = out.replace(/<title>[\s\S]*?<\/title>\s*/i, "");
  const drop = [
    /<meta\s+name="description"[^>]*>\s*/gi,
    /<meta\s+name="robots"[^>]*>\s*/gi,
    /<link\s+rel="canonical"[^>]*>\s*/gi,
    /<meta\s+property="og:(title|description|url|type|image)"[^>]*>\s*/gi,
    /<meta\s+name="twitter:(title|description|image|card)"[^>]*>\s*/gi,
  ];
  for (const re of drop) out = out.replace(re, "");
  return out;
}

let count = 0;
for (const route of publicRoutes) {
  const { html, head } = render(route.path);

  let page = head ? stripStaticHead(template, head) : template;
  page = page.replace("</head>", `  ${head}\n  </head>`);
  page = page.replace('<div id="root"></div>', `<div id="root">${html}</div>`);

  const outFile =
    route.path === "/"
      ? resolve(distDir, "index.html")
      : resolve(distDir, `${route.path.replace(/^\//, "")}/index.html`);

  mkdirSync(dirname(outFile), { recursive: true });
  writeFileSync(outFile, page);
  count++;
}

rmSync(resolve(distDir, "server"), { recursive: true, force: true });
console.log(`prerender: ${count} routes written to dist/`);
