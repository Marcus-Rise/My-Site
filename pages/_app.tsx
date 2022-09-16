import type { FC } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { title } from "../src/seo";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={"crossorigin"} />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
        rel="stylesheet"
      />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta property="og:image" content={"/img/profile.jpg"} />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
