import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap:
      "https://naveen-portfolio-4yxed2ila-naveen-7354.vercel.app/sitemap.xml",
  };
}