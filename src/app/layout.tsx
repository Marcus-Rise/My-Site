import type { FC, PropsWithChildren } from "react";
import styles from "./layout.module.scss";
import { Roboto } from "next/font/google";
import classNames from "classnames";
import "../styles/global.scss";
import { Theme } from "../components/theme";
import type { Metadata } from "next";
import { description, keywords, title } from "../seo";
import variables from "../styles/variables.module.scss";

const roboto = Roboto({
  weight: "400",
  subsets: ["cyrillic", "latin"],
  variable: "--roboto",
  display: "swap",
});

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
  <html lang={"ru"} className={classNames(styles.html, roboto.variable)}>
    <body className={styles.body}>
      <Theme />
      <main className={styles.main}>{children}</main>
    </body>
  </html>
);

const metadata: Metadata = {
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
  },
  themeColor: variables.colorBackgroundDarkest,
};

export default RootLayout;
export { metadata };
