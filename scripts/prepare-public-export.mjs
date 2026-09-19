import { readdir, access, rm, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Only generated output is changed. Retained app routes remain available in dev.
const projectRoot = fileURLToPath(new URL("../", import.meta.url));
const exportRoot = path.join(projectRoot, "dist");
const publicRoutes = new Set(["", "legal/privacy", "legal/terms"]);

// Fail the deployment build if the expected static export is missing.
for (const route of publicRoutes) {
  await access(path.join(exportRoot, route, "index.html"));
}

// A previous dev session can leave build internals in dist/. Publish only
// static assets, the approved route parent, and Next's homepage/error payloads.
const publicAssets = new Set(await readdir(path.join(projectRoot, "public")));
const rootEntries = new Set(["_next", "legal", "index.html", "index.txt", "404.html", "favicon.ico"]);
for (const entry of await readdir(exportRoot, { withFileTypes: true })) {
  const homePayload = entry.isFile() && /^__next\..*\.txt$/.test(entry.name);
  if (!rootEntries.has(entry.name) && !publicAssets.has(entry.name) && !homePayload) {
    await rm(path.join(exportRoot, entry.name), { recursive: true, force: true });
    console.log(`Excluded from public export: ${entry.name}`);
  }
}

// The only published nested pages are the two legal pages. Remove other
// legal entries together with their payloads; assets do not need scanning.
for (const entry of await readdir(path.join(exportRoot, "legal"))) {
  if (!publicRoutes.has(`legal/${entry}`)) {
    await rm(path.join(exportRoot, "legal", entry), { recursive: true, force: true });
    console.log(`Excluded from public export: /legal/${entry}/`);
  }
}

// Keep the public sitemap aligned with the route allowlist.
const sitemap = await readFile(path.join(exportRoot, "sitemap.xml"), "utf8");
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
const expectedUrls = [...publicRoutes].map((route) => `https://talery.co/${route ? `${route}/` : ""}`);
if (urls.length !== expectedUrls.length || expectedUrls.some((url) => !urls.includes(url))) {
  throw new Error("The sitemap must list exactly the three approved public routes.");
}

console.log("Public export ready in dist/: homepage, privacy, terms, assets, and error page.");
