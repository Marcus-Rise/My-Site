import type { MetadataRoute } from "next";
import { description, title } from "../seo";
import variables from "../styles/variables.module.scss";
import icon from "./icon.png";
import { headers } from "next/headers";

export default (): MetadataRoute.Manifest => {
  const host = headers().get("Host") ?? "";

  return {
    name: `${title} ${description}`,
    short_name: title,
    theme_color: variables.colorBackgroundDarkest,
    background_color: variables.colorBackgroundDarkest,
    display: "standalone",
    orientation: "portrait",
    start_url: ".",
    id: "/",
    icons: [{ src: icon.src, purpose: "any", sizes: `${icon.height}x${icon.width}` }],
  };
};
