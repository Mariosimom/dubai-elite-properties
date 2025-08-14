import type { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {
  const base='https://example.com';
  return [
    { url: `${base}/`, priority:1.0 },
    { url: `${base}/#top-listings` },
    { url: `${base}/#latest-projects` },
    { url: `${base}/#map` },
    { url: `${base}/#investor-areas` },
    { url: `${base}/#luxury-areas` },
    { url: `${base}/#about` },
    { url: `${base}/#contact` },
  ];
}
