export async function fetchPage(url, fetcher = fetch) {
  const u = new URL(url);
  if (!["https:", "http:"].includes(u.protocol)) throw new Error("Unsupported URL");
  const response = await fetcher(u.href, { headers: { Accept: "text/html,application/json" } });
  if (!response.ok) throw new Error("HTTP " + response.status);
  const text = await response.text();
  if (text.length > 2000000) throw new Error("Page too large");
  return { html: text, url: response.url || u.href };
}
export function extractMetadata(html, pageUrl) {
  const doc = new DOMParser().parseFromString(html, "text/html");
  const meta = key => doc.querySelector('meta[property="' + key + '"],meta[name="' + key + '"]')?.content || "";
  const title = doc.querySelector("title")?.textContent?.trim() || meta("og:title");
  const description = meta("og:description") || meta("description");
  const image = meta("og:image");
  return { title, description, image: image ? new URL(image, pageUrl).href : "", pageUrl };
}
export async function searchConfiguredSource(source, query) {
  if (source.authorized !== true) throw new Error("Source not approved for scraping");
  if (!source.searchUrl || !source.searchUrl.includes("{query}")) throw new Error("Missing search template");
  const url = source.searchUrl.replace("{query}", encodeURIComponent(String(query).trim()));
  const { html, url: finalUrl } = await fetchPage(url);
  const doc = new DOMParser().parseFromString(html, "text/html");
  return [...doc.querySelectorAll(source.resultSelector || "a")].slice(0, 30).map(a => {
    const href = a.getAttribute("href");
    if (!href) return null;
    const title = (a.querySelector(source.titleSelector || "")?.textContent || a.textContent || a.title || "").trim();
    return title ? { title, pageUrl: new URL(href, finalUrl).href, sourceId: source.id } : null;
  }).filter(Boolean);
}
export async function resolveConfiguredPage(source, pageUrl) {
  if (source.authorized !== true) throw new Error("Source not approved for scraping");
  const { html, url } = await fetchPage(pageUrl);
  const doc = new DOMParser().parseFromString(html, "text/html");
  const metadata = extractMetadata(html, url);
  const streams = [];
  for (const selector of source.mediaSelectors || []) for (const el of doc.querySelectorAll(selector)) {
    const raw = el.getAttribute("src") || el.getAttribute("href") || el.getAttribute("data-src");
    if (!raw) continue;
    const media = new URL(raw, url);
    if (!["https:", "http:"].includes(media.protocol)) continue;
    if (/\.(m3u8|mp4)(\?|$)/i.test(media.href)) streams.push({ url: media.href, type: /\.m3u8/i.test(media.href) ? "hls" : "mp4", title: metadata.title });
  }
  return { metadata, streams: [...new Map(streams.map(s => [s.url, s])).values()] };
}
