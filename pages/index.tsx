import type { FC } from "react";
import { description, keywords, title } from "../src/seo";
import { Profile } from "../src/profile";
import Head from "next/head";
import { Layout } from "../src/components";

const Home: FC = () => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Head>
    <Layout center>
      <Profile title={title} description={description} />
    </Layout>
  </>
);

export default Home;
