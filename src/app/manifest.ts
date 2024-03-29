import type { MetadataRoute } from "next";
import metaConfig from "@/meta-config.cjs";
import { ICON_SIZES } from "@/app/icon-sizes.constant";

const icons = ICON_SIZES.flatMap((size) => {
  const contentType = "image/png";
  const sizes = `${size}x${size}`;
  const srcBase = `/manifest-icon`;

  return [
    {
      src: `${srcBase}/${size}`,
      type: contentType,
      sizes,
      purpose: "any" as const,
    },
    {
      src: `${srcBase}/${size}-maskable`,
      type: contentType,
      sizes,
      purpose: "maskable" as const,
    },
  ];
});

const generateManifest = (): MetadataRoute.Manifest => ({
  name: metaConfig.title,
  short_name: metaConfig.title,
  description: metaConfig.description,
  theme_color: metaConfig.themeColor.light,
  background_color: metaConfig.themeColor.light,
  display: "standalone",
  orientation: "portrait",
  start_url: "/",
  id: "/",
  icons,
});

export const runtime = "nodejs";

export default generateManifest;
