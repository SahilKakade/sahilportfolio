import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/", "/our-work"] }],
    sitemap: "https://sahilkakade.in/sitemap.xml",
  };
}