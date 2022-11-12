import type { NextMiddleware } from "next/server";
import { NextResponse } from "next/server";
import { getRobotsTxt, getSiteMap } from "./seo";

const middleware: NextMiddleware = (request) => {
  const host = request.nextUrl.hostname;

  if (request.nextUrl.pathname.startsWith("/sitemap.xml")) {
    const sitemap = getSiteMap(host);

    return new NextResponse(sitemap, {
      headers: {
        "Content-Type": "application/xml",
      },
    });
  }

  if (request.nextUrl.pathname.startsWith("/robots.txt")) {
    const isAllow = Boolean(process.env.ALLOW_ROBOTS);
    const robots = getRobotsTxt(host, isAllow);

    return new NextResponse(robots, {
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }

  return NextResponse.next();
};

const config = {
  matcher: ["/sitemap.xml", "/robots.txt"],
};

export { middleware, config };
