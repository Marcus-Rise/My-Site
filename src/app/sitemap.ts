import type { MetadataRoute } from "next";
import { baseUrl } from "../seo";

type Page = MetadataRoute.Sitemap[number];

const sitemap = (): MetadataRoute.Sitemap => {
  const mainPage: Page = {
    url: new URL("/", baseUrl).href,
  };

  return [mainPage];
};

export default sitemap;
