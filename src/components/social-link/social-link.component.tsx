import type { FC } from "react";
import React from "react";
import { useAmp } from "next/amp";
import Image from "next/image";

interface ISocialLinkProps {
  linkHref: string;
  imgSrc: string;
  altText: string;
  size: number | string;
  className?: string;
}

const SocialLink: FC<ISocialLinkProps> = ({ className, linkHref, size, imgSrc, altText }) => {
  const isAmp = useAmp();

  return (
    <a className={className} href={linkHref} target="_blank" rel="noopener noreferrer" title={altText}>
      {isAmp ? (
        <amp-img height={size} width={size} src={imgSrc} alt={altText} layout={"fixed"} />
      ) : (
        <Image src={imgSrc} alt={altText} height={size} width={size} quality={25} />
      )}
    </a>
  );
};

export { SocialLink };
