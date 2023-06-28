import type { MetadataRoute } from "next";
import { title } from "../seo";
import variables from "../styles/variables.module.scss";
import icon from "./icon.png";

const manifest = (): MetadataRoute.Manifest => ({
  name: title,
  short_name: title,
  theme_color: variables.colorBackgroundDarkest,
  background_color: variables.colorBackgroundDarkest,
  display: "standalone",
  orientation: "portrait",
  start_url: ".",
  id: "/",
  icons: [
    { src: icon.src, purpose: "maskable", sizes: `${icon.height}x${icon.width}` },
    {
      src: icon.src,
      purpose: "any",
      sizes: `${icon.height}x${icon.width}`,
    },
  ],
});

export default manifest;
