import type { FC, PropsWithChildren } from "react";
import styles from "./layout.module.scss";
import { Roboto } from "@next/font/google";
import classNames from "classnames";
import "../styles/global.scss";
import { Theme } from "../components/theme";
import { cookies, headers } from "next/headers";
import { THEME_COOKIE_KEY } from "../components/theme/theme-config";

const roboto = Roboto({
  weight: "400",
  subsets: ["cyrillic", "latin"],
  variable: "--roboto",
  display: "swap",
});

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  const userPreferColorScheme = cookies().get(THEME_COOKIE_KEY);
  const systemDefaultColorScheme = headers().get("sec-ch-prefers-color-scheme");
  const colorScheme = userPreferColorScheme?.value ?? systemDefaultColorScheme;

  return (
    <html lang={"ru"} data-theme={colorScheme} className={styles.html}>
      <body className={classNames(styles.body, roboto.variable)}>
        <Theme />
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
