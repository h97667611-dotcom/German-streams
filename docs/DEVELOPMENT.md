# Development

## Nuvio integration
Nuvio's public local-scraper manifests use a root `manifest.json` with a `scrapers` array and provider files under the paths declared by `filename`. This repository follows that shape.

Before adding functional provider callbacks:
1. Identify the Nuvio app version and supported local-scraper API.
2. Compare a known working provider's exports and argument shapes from the same app version.
3. Keep catalog metadata separate from playback resolution.
4. Only implement playback for streams you own, license, or are authorized to access.
5. Never store API tokens in source; use provider settings or environment configuration supported by Nuvio.

## Planned modules
- `providers/kinoger.js`: catalog reference
- `providers/aniwall.js`: catalog reference
- Future: metadata adapter backed by a permitted API; player adapter for user-provided M3U/HLS sources.

## Validation
- Parse manifest as JSON.
- Ensure every `filename` exists.
- Confirm manifest URL loads from GitHub raw.
- Test in Nuvio with logs enabled before claiming compatibility.
