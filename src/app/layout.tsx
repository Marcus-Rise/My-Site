import type { FC, PropsWithChildren } from "react";
import styles from "./layout.module.scss";
import { Roboto } from "@next/font/google";
import classNames from "classnames";
import "../styles/global.scss";
import { Theme } from "../components/theme";
import { cookies, headers } from "next/headers";
import { THEME_COOKIE_KEY } from "../components/theme/theme-config";
import type { Metadata } from "next";
import { description, keywords, title } from "../seo";

const roboto = Roboto({
  weight: "400",
  subsets: ["cyrillic", "latin"],
  variable: "--roboto",
  display: "swap",
});

const getTheme = (): string | null => {
  const userPreferColorScheme = cookies().get(THEME_COOKIE_KEY);
  const systemDefaultColorScheme = headers().get("sec-ch-prefers-color-scheme");

  return userPreferColorScheme?.value ?? systemDefaultColorScheme;
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  const colorScheme = getTheme();

  return (
    <html lang={"ru"} data-theme={colorScheme} className={styles.html}>
      <body className={classNames(styles.body, roboto.variable)}>
        <Theme />
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
};

const metadataStatic: Metadata = {
  title,
  description,
  keywords,
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  colorScheme: "light dark",
  openGraph: {
    title,
    description,
    images: {
      alt: title,
      url: "/img/profile.jpg",
    },
  },
  icons: [
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png",
    },
  ],
  manifest: "/site.webmanifest",
};

const generateMetadata = async (): Promise<Metadata> => {
  const colorScheme = getTheme();
  const isDark = colorScheme === "dark";

  return {
    ...metadataStatic,
    themeColor: isDark ? "#272b2f" : "#445768",
  };
};

export default RootLayout;
export { generateMetadata };
