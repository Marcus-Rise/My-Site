import type { FC } from "react";
import { description, keywords, title } from "../seo";

const Head: FC = () => (
  <>
    <title>{title}</title>
    <meta charSet="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0"
    />
    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

    <meta name="title" content={title} />
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta property="og:image" content={"/img/profile.jpg"} />
    <meta name="color-scheme" content="dark light" />

    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
  </>
);

export default Head;
