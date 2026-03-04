import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.siteUrl;

  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/album`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/listen`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/shop`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/videos`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/book`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/epk`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/link-in-bio`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/terms`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
  ];
}
