# German-streams (Nuvio plugin repository)

**Manifest URL:** https://raw.githubusercontent.com/h97667611-dotcom/German-streams/main/manifest.json

## Install
1. Use a Nuvio build that supports JavaScript plugins (sideloaded builds may be required; app-store builds may not support plugins).
2. In Nuvio open **Settings → Content & Discovery → Plugins** (not Addons).
3. Add the manifest URL above, refresh, and check the repository status.
4. The provider is currently **disabled** because this repository does not yet have a verified, authorized direct-stream API. Enable it only for testing; it returns no stream candidates.

## Why the earlier 404/error
The previous manifest was a custom object with a `scrapers` field, rather than Nuvio's current provider manifest format. Nuvio's plugin manifest expects a JSON array of provider objects, each with `id`, `name`, `filename`, and `supportedTypes`. This repository now uses that format and a root-level provider file.

If Nuvio still reports HTTP 404, verify that the app is using this exact raw URL:
`https://raw.githubusercontent.com/h97667611-dotcom/German-streams/main/manifest.json`
A plugin repo must be installed under Plugins, not Addons. The installed app version must support plugins.

## Source directory
See [catalog/german-sources.json](catalog/german-sources.json) for a curated directory of official German public-service, educational, documentary, audio, and anime sources. This directory is not a scraper and does not provide stream URLs.

## Scope
This repository does not scrape or resolve unauthorized streaming pages, bypass paywalls/access controls, or extract protected video URLs. Anime and video playback can only be added when a source provides an authorized API or direct playback endpoint and the provider can be tested against Nuvio's current runtime.

## Developer reference
- [Nuvio provider template](https://github.com/yoruix/nuvio-providers)
- [Nuvio plugin guide](https://nuvio-wiki.duckdns.org/integrations/plugins)
- [FMHY German / Deutsch directory](https://github.com/fmhy/FMHY/wiki/Non-Eng)
