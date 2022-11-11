import type { FC, PropsWithChildren } from "react";
import styles from "./layout.module.scss";
import { Roboto } from "@next/font/google";
import classNames from "classnames";
import "../styles/global.scss";
import { Theme, THEME_COOKIE_KEY } from "../components/theme";
import { cookies, headers } from "next/headers";

const roboto = Roboto({
  weight: "400",
  subsets: ["cyrillic", "latin"],
  variable: "--roboto",
  display: "swap",
});

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  const headersList = headers();
  const userPreferColorScheme = cookies().get(THEME_COOKIE_KEY);
  const systemDefaultColorScheme = headersList.get("sec-ch-prefers-color-scheme");
  const colorScheme = userPreferColorScheme ?? systemDefaultColorScheme;

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
