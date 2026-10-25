/**
 * German-streams: safe Nuvio provider entry point.
 * This is intentionally a no-op until a source offers an authorized
 * provider API/direct stream endpoint. It does not scrape protected sites.
 */
function getStreams(tmdbId, mediaType, season, episode) {
  return Promise.resolve([]);
}

module.exports = { getStreams };
