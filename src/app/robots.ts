import type { MetadataRoute } from "next";
import { baseUrl } from "../seo";

type Rules = MetadataRoute.Robots["rules"];

const allowRules: Rules = {
  userAgent: "*",
  allow: "/",
};
const disallowRules: Rules = {
  userAgent: "*",
  disallow: "/",
};

const robots = (): MetadataRoute.Robots => {
  const isAllow = process.env.ALLOW_ROBOTS === "true";
  const sitemap = new URL("/sitemap.xml", baseUrl).href;

  return {
    rules: isAllow ? allowRules : disallowRules,
    sitemap,
  };
};

export default robots;
