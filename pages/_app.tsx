import type { FC } from "react";
import React from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { description, keywords, title } from "../src/seo";
import "../src/styles/global.scss";
import { Layout } from "../src/components";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Head>
    <Layout center>
      <Component {...pageProps} />
    </Layout>
  </>
);

export default MyApp;
