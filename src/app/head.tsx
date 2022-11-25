import type { FC } from "react";
import { description, keywords, title } from "../seo";
import { cookies, headers } from "next/headers";
import { THEME_COOKIE_KEY } from "../components/theme/theme-config";

const Head: FC = () => {
  const userPreferColorScheme = cookies().get(THEME_COOKIE_KEY);
  const systemDefaultColorScheme = headers().get("sec-ch-prefers-color-scheme");
  const colorScheme = userPreferColorScheme?.value ?? systemDefaultColorScheme;
  const isDark = colorScheme === "dark";

  return (
    <>
      <title>{title}</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:image" content={"/img/profile.jpg"} />
      <meta name="color-scheme" content="dark light" />
      <meta name="theme-color" content={isDark ? "#272b2f" : "#445768"} />

      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </>
  );
};

export default Head;
