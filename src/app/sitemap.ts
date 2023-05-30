import type { MetadataRoute } from "next";
import { headers } from "next/headers";

type Page = MetadataRoute.Sitemap[number];

const sitemap = (): MetadataRoute.Sitemap => {
  const host = headers().get("Host") ?? "";
  const baseUrl = new URL(`https://${host}`);

  const mainPage: Page = {
    url: new URL("/", baseUrl).href,
  };

  return [mainPage];
};

export default sitemap;
