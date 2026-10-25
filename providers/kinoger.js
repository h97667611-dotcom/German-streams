/*
 * German streams — Kinoger catalog reference provider.
 * Safe scaffold: does not scrape protected streams, bypass access controls,
 * decrypt media URLs, or download copyrighted video.
 *
 * Runtime contract note: adapt the exported methods to the Nuvio version
 * installed on the user's device. The manifest format is based on public
 * Nuvio local-scraper manifests.
 */
const SITE = "https://kinoger.to/";

function getSettings() {
  return { siteUrl: SITE, enabled: true };
}

function getCatalogInfo() {
  return {
    id: "kinoger_catalog",
    name: "Kinoger Katalog",
    language: "de",
    siteUrl: SITE,
    capabilities: ["catalog-reference", "external-open"],
    playback: "external-authorized-source-only"
  };
}


function search(query) {
  const q = String(query || "").trim();
  if (!q) return [];
  // This provider intentionally does not scrape the website. Use a source
  // you control or an authorized metadata API to populate catalog entries.
  return [{
    id: "kinoger-search-" + encodeURIComponent(q),
    title: q,
    type: "movie",
    language: "de",
    source: "Kinoger",
    externalUrl: SITE,
    note: "Open the catalog site; no stream URL is extracted."
  }];
}


function openCatalog() {
  return SITE;
}


module.exports = { getSettings, getCatalogInfo, search, openCatalog };
