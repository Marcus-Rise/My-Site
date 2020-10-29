import React from "react";
import "react-lazy-load-image-component/src/effects/blur.css";
import Image from "next/image";

export const Avatar: React.FC<{ size: number; alt: string }> = (props) => (
  <Image
    alt={props.alt}
    height={props.size}
    width={props.size}
    src="/profile-cropped/profile-cropped_ngn5s8_c_scale,w_914-min.png"
  />
);
