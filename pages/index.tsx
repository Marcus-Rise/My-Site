import type { FC } from "react";
import React from "react";
import { description, keywords, title } from "../src/seo";
import { Profile } from "../src/profile";
import Head from "next/head";
import { Layout } from "../src/components";

const Home: FC = () => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta property="og:image" content={"/img/profile.jpg"} />
    </Head>
    <Layout center>
      <Profile title={title} description={description} />
    </Layout>
  </>
);

export default Home;
