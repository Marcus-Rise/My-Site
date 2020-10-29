import React from "react";
import Image from "next/image";
import { useAmp } from "next/amp";

export const Avatar: React.FC<{ size: number; alt: string }> = (props) => {
  const isAmp = useAmp();
  const src = "/profile-cropped/profile-cropped_ngn5s8_c_scale,w_914-min.png";

  return isAmp ? (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <amp-img height={props.size} width={props.size} src={src} alt={props.alt} layout="responsive" />
  ) : (
    <Image alt={props.alt} height={props.size} width={props.size} src={src} />
  );
};
