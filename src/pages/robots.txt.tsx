import type { GetServerSideProps } from "next";

const getRobotsStr = (hostName: string): string => {
  const isAllow = Boolean(process.env.ALLOW_ROBOTS);

  const robots = isAllow
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
    .map((i) => {
      // @ts-ignore
      return `${i}: ${robots[i]}`;
    })
    .join("\n");
};

const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const host = String(req.headers.host);
  const robots = getRobotsStr(host);
  res.setHeader("Content-Type", "text/plain");
  res.end(robots);

  return {
    props: {},
  };
};

const Robots = () => {};

export default Robots;
export { getServerSideProps };
