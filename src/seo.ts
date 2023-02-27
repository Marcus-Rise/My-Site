import { skills } from "./skills.array";

const title = "Илья Константинов";
const description = "Ведущий веб-разработчик";
const keywords: string[] = [
  ...skills,
  ...title.split(" "),
  ...description.split(" "),
  "Самара",
  "Web",
];
const getSiteMap = (host: string): string =>
  `
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<url>
<loc>https://${host}/</loc>
</url>
</urlset>
  `;
const getRobotsTxt = (hostName: string, isAllow: boolean): string => {
  const robots: Record<string, string> = isAllow
    ? {
        "User-agent": "*",
        Allow: "/",
        Sitemap: `https://${hostName}/sitemap.xml`,
      }
    : {
        "User-agent": "*",
        Disallow: "/",
        Sitemap: `https://${hostName}/sitemap.xml`,
      };

  return Object.keys(robots)
    .map((i) => `${i}: ${robots[i]}`)
    .join("\n");
};

export { title, description, keywords, getSiteMap, getRobotsTxt };
