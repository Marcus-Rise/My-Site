import type { FC } from "react";
import React from "react";
import Image from "next/image";

interface ISocialLinkProps {
  linkHref: string;
  imgSrc: string | StaticImageData;
  altText: string;
  size: number | string;
  className?: string;
}

const SocialLink: FC<ISocialLinkProps> = ({ className, linkHref, size, imgSrc, altText }) => (
  <a className={className} href={linkHref} target="_blank" rel="noopener noreferrer" title={altText}>
    <Image src={imgSrc} alt={altText} height={size} width={size} quality={25} />
  </a>
);

export { SocialLink };
