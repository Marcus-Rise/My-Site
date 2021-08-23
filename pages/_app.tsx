import type { FC } from "react";
import React from "react";
import type { AppProps } from "next/app";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => <Component {...pageProps} />;

export default MyApp;
