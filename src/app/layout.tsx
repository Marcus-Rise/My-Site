import type { FC, PropsWithChildren } from "react";
import styles from "./layout.module.scss";
import { Roboto } from "next/font/google";
import classNames from "classnames";
import "../styles/global.scss";
import { Theme } from "../components/theme";
import type { Metadata } from "next";
import variables from "../styles/variables.module.scss";
import { AnalyticsYandex } from "../analytics/yandex";
import { Analytics } from "@vercel/analytics/react";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["cyrillic", "latin"],
  variable: "--roboto",
  display: "swap",
});

const ENABLE_ANALYTICS = process.env.ANALYTICS === "true";

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
  <html lang={"ru"} className={classNames(styles.html, roboto.variable)}>
    <body className={styles.body}>
      <Theme />
      <main className={styles.main}>{children}</main>
      {ENABLE_ANALYTICS && (
        <>
          <Analytics />
          <AnalyticsYandex />
        </>
      )}
    </body>
  </html>
);

const metadata: Metadata = {
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  colorScheme: "light dark",
  themeColor: variables.colorBackgroundDarkest,
};

export default RootLayout;
export { metadata };
