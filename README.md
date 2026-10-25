# German streams (Nuvio local scraper)

**Repository:** https://github.com/h97667611-dotcom/German-streams  
**Visibility:** Private

German-language Nuvio local-scraper starter for catalog metadata and playback of sources you own or are authorized to access.

## Status
This is an initial scaffold, not a production-ready scraper. Nuvio's exact runtime contract can vary by app release; verify provider exports against the installed Nuvio version before enabling. It intentionally does not scrape protected video hosts or resolve unauthorized stream URLs.

## Features in this scaffold
- Nuvio manifest with two provider entries (Kinoger and AniWorld)
- Provider metadata and host configuration
- Search/catalog helper functions
- Explicit external-site opening only; no stream extraction
- Documentation for implementing authorized sources

## Install
1. Open Nuvio.
2. Go to **Settings → Local Scrapers**.
3. Add manifest URL: `https://raw.githubusercontent.com/h97667611-dotcom/German-streams/main/manifest.json`
4. Enable the provider(s), if your Nuvio build supports this manifest.
5. Check provider logs and adapt exports to the installed Nuvio scraper API.

## Sources
- Kinoger: https://kinoger.to/
- AniWorld: https://aniworld.to/

The provider modules only return catalog-site information and external links. They do not fetch, decrypt, bypass access controls, or download protected media.

## Development
See [docs/DEVELOPMENT.md](docs/DEVELOPMENT.md) and [docs/LEGAL.md](docs/LEGAL.md).

## License
MIT for this scaffold's original code. This does not grant rights to third-party websites, media, logos, or content.
