import type { FC, PropsWithChildren } from "react";
import { Roboto } from "next/font/google";
import "./global.css";
import type { Metadata, Viewport } from "next";
import { AnalyticsYandex, AnalyticsYandexReporter } from "@/analytics/yandex";
import { Analytics } from "@vercel/analytics/react";
import metaConfig from "@/meta-config.cjs";
import { configFactory } from "@/config";
import { content } from "@/content";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["cyrillic", "latin"],
  variable: "--roboto",
  display: "swap",
});

const { analyticsEnable, canonicalBaseUrl } = configFactory();

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang={"ru"} className={roboto.variable}>
      <body className={"font-sans bg-primary text-font"}>
        {children}
        {analyticsEnable && (
          <>
            <Analytics />
            <AnalyticsYandex />
            <AnalyticsYandexReporter />
          </>
        )}
      </body>
    </html>
  );
};

const metadata: Metadata = {
  applicationName: metaConfig.title,
  title: metaConfig.title,
  description: content.shortDescription,
  keywords: content.keywords,
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: metaConfig.title,
  },
  metadataBase: canonicalBaseUrl,
  openGraph: {
    url: "/",
    type: "profile",
  },
  twitter: {
    card: "summary",
  },
};

const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: metaConfig.themeColor.dark },
    { media: "(prefers-color-scheme: light)", color: metaConfig.themeColor.light },
  ],
};

export const runtime = "edge";

export default RootLayout;
export { metadata, viewport };
