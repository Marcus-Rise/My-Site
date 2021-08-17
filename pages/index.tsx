import type { FC } from "react";
import React from "react";
import { description, keywords, title } from "../src/seo";
import { Profile } from "../src/profile";
import Head from "next/head";
import { Layout } from "../src/components";
import type { GetStaticProps } from "next";

const config = { amp: "hybrid" };

interface IHomeProps {
  title: string;
  description: string;
  keywords: string;
}

const getStaticProps: GetStaticProps<IHomeProps> = () => {
  return {
    props: {
      title,
      description,
      keywords,
    },
  };
};

const Home: FC<IHomeProps> = ({ title, description, keywords }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
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
export { config, getStaticProps };
