import type { MetadataRoute } from "next";
import { headers } from "next/headers";

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
  const isAllow = Boolean(process.env.ALLOW_ROBOTS);
  const host = headers().get("Host") ?? "";
  const sitemap = new URL(`https://${host}/sitemap.xml`).href;

  return {
    rules: isAllow ? allowRules : disallowRules,
    sitemap,
  };
};

export default robots;
