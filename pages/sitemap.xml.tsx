import type { GetServerSideProps } from "next";

const getSiteMap = (host: string): string =>
  `
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<url>
<loc>${host}/</loc>
</url>
</urlset>
  `;

const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const host = String(req.headers.host);
  const sitemap = getSiteMap(host);

  res.setHeader("Content-Type", "application/xml");
  res.end(sitemap);

  return {
    props: {},
  };
};

const Sitemap = () => {};

export default Sitemap;
export { getServerSideProps };
