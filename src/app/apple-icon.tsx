import { LogoImageResponse } from "@/logo-image-response.helper";
import { ICON_SIZES } from "@/app/icon-sizes.constant";

const generateImageMetadata = () =>
  ICON_SIZES.map((size) => ({
    contentType: "image/png",
    id: String(size),
    size: { width: size, height: size },
  }));

const IconResponse = ({ id }: { id: string }) => LogoImageResponse({ size: id, isMaskable: true });

export const runtime = "edge";

export default IconResponse;
export { generateImageMetadata };
