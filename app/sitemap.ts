import type { MetadataRoute } from "next";
import { site } from "@/content/site";

// Prerendered to a file for the static export (output: "export").
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, changeFrequency: "weekly", priority: 1 },
    {
      url: `${site.url}/privacidade`,
      lastModified: site.legalEffectiveDateISO,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${site.url}/termos`,
      lastModified: site.legalEffectiveDateISO,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
