import type { FC, PropsWithChildren } from "react";
import styles from "./layout.module.scss";
import { Roboto } from "@next/font/google";
import classNames from "classnames";
import "../styles/global.scss";
import { Theme } from "../components/theme";
import { headers } from "next/headers";

const roboto = Roboto({
  weight: "400",
  subsets: ["cyrillic", "latin"],
  variable: "--roboto",
  display: "swap",
});

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  const headersList = headers();
  const prefersColorScheme = headersList.get("sec-ch-prefers-color-scheme");

  return (
    <html lang={"ru"} data-theme={prefersColorScheme} className={styles.html}>
      <body className={classNames(styles.body, roboto.variable)}>
        <Theme />
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
