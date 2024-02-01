import metaConfig from "@/meta-config.cjs";
import { ImageResponse } from "next/og";

type LogoImageResponseConfig = { isMaskable?: boolean; size: number | `${number}` | string };

const LogoImageResponse = async ({ isMaskable, size }: LogoImageResponseConfig) => {
  const fontData = await fetch(
    new URL("@/assets/fonts/Protest_Riot/ProtestRiot-Regular.ttf", import.meta.url),
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          background: isMaskable ? "white" : "transparent",
          width: "100%",
          height: "100%",
          display: "flex",
          padding: isMaskable ? `${Number(size) / 5}px` : "",
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            alignContent: "center",
            justifyContent: "center",
            justifyItems: "center",
            width: `${size}px`,
            height: `${size}px`,
            borderRadius: "100%",
            backgroundColor: metaConfig.themeColor.dark,
            maxWidth: "100%",
            maxHeight: "100%",
            fontSize: "100%",
          }}
        >
          <span
            style={{
              color: "white",
              fontSize: `${isMaskable ? Number(size) / 3 : Number(size) / 1.75}px`,
            }}
          >
            IK
          </span>
        </div>
      </div>
    ),
    {
      width: Number(size),
      height: Number(size),
      fonts: [
        {
          data: fontData,
          name: "Protest_Riot",
        },
      ],
    },
  );
};

export { LogoImageResponse };
