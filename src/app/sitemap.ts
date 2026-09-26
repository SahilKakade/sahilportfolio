import type { MetadataRoute } from "next";

const SITE_URL = "https://sahilkakade.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes: { path: string; priority: number }[] = [
    { path: "", priority: 1 },
    { path: "/our-work", priority: 0.9 },
    { path: "/shopify", priority: 0.9 },
    { path: "/about-me", priority: 0.7 },
  ];
  return routes.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: r.priority,
  }));
}
