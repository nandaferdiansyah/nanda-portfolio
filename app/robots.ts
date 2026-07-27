import type { MetadataRoute } from "next";

import { METADATA } from "@/common/constants/profile";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${METADATA.url}/sitemap.xml`,
  };
}
