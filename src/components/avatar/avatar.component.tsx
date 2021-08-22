import type { FC } from "react";
import React from "react";
import Image from "next/image";
import { useAmp } from "next/amp";
import styles from "./avatar.module.scss";

interface IAvatarProps {
  size: number | string;
  alt: string;
  src: any;
}

const Avatar: FC<IAvatarProps> = ({ alt, size, src }) => {
  const isAmp = useAmp();

  return isAmp ? (
    <amp-img height={size} width={size} src={src} alt={alt} layout={"fixed"} />
  ) : (
    <Image
      className={styles.root}
      alt={alt}
      height={size}
      width={size}
      src={src}
      priority
      placeholder={"blur"}
      blurDataURL={
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNcXw8AAeMBMA+N6mYAAAAASUVORK5CYII="
      }
      quality={25}
    />
  );
};

export { Avatar };
