import { writeFile } from "node:fs/promises";
import { PUBLIC_ROUTES, PRODUCTION_URL } from "./public-routes.js";

const urls = PUBLIC_ROUTES.map((path) => {
  const url = new URL(path, PRODUCTION_URL).toString();
  return `  <url><loc>${url}</loc></url>`;
});

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...urls,
  "</urlset>",
  "",
].join("\n");

await writeFile(new URL("../public/sitemap.xml", import.meta.url), sitemap, "utf8");
