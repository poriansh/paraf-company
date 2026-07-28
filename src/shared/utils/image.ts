const IMAGE_BASE_URL = (
  process.env.NEXT_PUBLIC_IMAGE_BASE_URL ??
  "https://wholesaler-core-develop.web.parafacc.ir"
).replace(/\/$/, "");

/** Build absolute URL from API `file.link` */
export function getFileUrl(link?: string | null): string | null {
  if (!link) return null;
  if (link.startsWith("http://") || link.startsWith("https://")) return link;
  return `${IMAGE_BASE_URL}/${link.replace(/^\//, "")}`;
}
