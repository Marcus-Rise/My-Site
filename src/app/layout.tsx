import type { FC, PropsWithChildren } from "react";
import styles from "./layout.module.scss";
import { Roboto } from "next/font/google";
import classNames from "classnames";
import "../styles/global.scss";
import { Theme } from "../components/theme";
import type { Metadata } from "next";
import variables from "../styles/variables.module.scss";
import { headers } from "next/headers";

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

const generateMetadata: () => Metadata = () => {
  const host = headers().get("Host") ?? "";
  const baseUrl = new URL(`https://${host}`);

  return {
    viewport: {
      width: "device-width",
      initialScale: 1,
    },
    colorScheme: "light dark",
    themeColor: variables.colorBackgroundDarkest,
    metadataBase: baseUrl,
  };
};

export default RootLayout;
export { generateMetadata };
