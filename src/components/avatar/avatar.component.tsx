import type { FC } from "react";
import Image from "next/image";
import styles from "./avatar.module.scss";

type AvatarProps = {
  size: number;
  alt: string;
  src: any;
};

const Avatar: FC<AvatarProps> = ({ alt, size, src }) => (
  <Image
    className={styles.image}
    alt={alt}
    height={size}
    width={size}
    src={src}
    quality={25}
    priority
  />
);

export { Avatar };
