import type { FC } from "react";
import Image from "next/image";

type AvatarProps = {
  size: number;
  alt: string;
  src: any;
};

const Avatar: FC<AvatarProps> = ({ alt, size, src }) => (
  <Image
    className={"object-center object-cover rounded-full border-2 h-fit border-secondary"}
    style={{ height: size }}
    alt={alt}
    height={size}
    width={size}
    src={src}
    priority
    placeholder={"blur"}
  />
);

export { Avatar };
