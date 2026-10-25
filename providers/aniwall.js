/*
 * German streams — AniWorld catalog reference provider.
 * Safe scaffold: no protected-stream extraction or access-control bypass.
 */
const SITE = "https://aniworld.to/";

function getSettings() {
  return { siteUrl: SITE, enabled: true };
}

function getCatalogInfo() {
  return {
    id: "aniwall_catalog",
    name: "AniWorld Katalog",
    language: "de",
    siteUrl: SITE,
    capabilities: ["catalog-reference", "external-open"],
    playback: "external-authorized-source-only"
  };
}


function search(query) {
  const q = String(query || "").trim();
  if (!q) return [];
  // Add metadata from a licensed API or a catalog you administer here.
  return [{
    id: "aniwall-search-" + encodeURIComponent(q),
    title: q,
    type: "tv",
    language: "de",
    source: "AniWorld",
    externalUrl: SITE,
    note: "Open the catalog site; no stream URL is extracted."
  }];
}


function openCatalog() {
  return SITE;
}


module.exports = { getSettings, getCatalogInfo, search, openCatalog };
