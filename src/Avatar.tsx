import React from "react";
// @ts-ignore
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export const Avatar: React.FC<{ size: number; alt: string }> = props => (
  <LazyLoadImage
    alt={props.alt}
    effect="blur"
    height={props.size}
    width={props.size}
    sizes="(max-width: 914px) 10vw, 200px"
    srcSet="
/profile-cropped/profile-cropped_ngn5s8_c_scale,w_200-min.png 200w,
/profile-cropped/profile-cropped_ngn5s8_c_scale,w_228-min.png 228w,
/profile-cropped/profile-cropped_ngn5s8_c_scale,w_252-min.png 252w,
/profile-cropped/profile-cropped_ngn5s8_c_scale,w_275-min.png 275w,
/profile-cropped/profile-cropped_ngn5s8_c_scale,w_297-min.png 297w,
/profile-cropped/profile-cropped_ngn5s8_c_scale,w_317-min.png 317w,
/profile-cropped/profile-cropped_ngn5s8_c_scale,w_336-min.png 336w,
/profile-cropped/profile-cropped_ngn5s8_c_scale,w_354-min.png 354w,
/profile-cropped/profile-cropped_ngn5s8_c_scale,w_370-min.png 370w,
/profile-cropped/profile-cropped_ngn5s8_c_scale,w_386-min.png 386w,
/profile-cropped/profile-cropped_ngn5s8_c_scale,w_402-min.png 402w,
/profile-cropped/profile-cropped_ngn5s8_c_scale,w_417-min.png 417w,
/profile-cropped/profile-cropped_ngn5s8_c_scale,w_432-min.png 432w,
/profile-cropped/profile-cropped_ngn5s8_c_scale,w_446-min.png 446w,
/profile-cropped/profile-cropped_ngn5s8_c_scale,w_460-min.png 460w,
/profile-cropped/profile-cropped_ngn5s8_c_scale,w_473-min.png 473w,
/profile-cropped/profile-cropped_ngn5s8_c_scale,w_486-min.png 486w,
/profile-cropped/profile-cropped_ngn5s8_c_scale,w_499-min.png 499w,
/profile-cropped/profile-cropped_ngn5s8_c_scale,w_914-min.png 914w"
    src="/profile-cropped/profile-cropped_ngn5s8_c_scale,w_914-min.png"
  />
);
