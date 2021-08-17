import type { FC } from "react";
import React from "react";
import type { AppProps } from "next/app";
import "../src/styles/global.scss";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => <Component {...pageProps} />;

export default MyApp;
