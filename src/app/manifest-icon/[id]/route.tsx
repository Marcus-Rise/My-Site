import type { NextRequest } from "next/server";
import { LogoImageResponse } from "@/logo-image-response.helper";

const ManifestIcon = (request: NextRequest, { params: { id } }: { params: { id: string } }) => {
  const isMaskable = id.includes("-maskable");
  const size = isMaskable ? id.split("-").at(0) ?? id : id;

  return LogoImageResponse({ isMaskable, size });
};

export const runtime = "edge";

export { ManifestIcon as GET };
