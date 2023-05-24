import type { MetadataRoute } from "next";
import { headers } from "next/headers";

export default (): MetadataRoute.Sitemap => {
  const host = headers().get("Host") ?? "";

  return [
    {
      url: `https://${host}/`,
    },
  ];
};
