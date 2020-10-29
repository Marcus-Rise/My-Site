import React from "react";
import Image from "next/image";
import { useAmp } from "next/amp";

export interface ILink {
  linkHref: string;
  imgSrc: string;
  altText: string;
  size: number | string;
}

export const LinkIcon: React.FC<ILink> = (props) => {
  const isAmp = useAmp();

  return (
    <a href={props.linkHref} target="_blank" rel="noopener noreferrer">
      {isAmp ? (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        <amp-img height={props.size} width={props.size} src={props.imgSrc} alt={props.altText} layout="responsive" />
      ) : (
        <Image src={props.imgSrc} alt={props.altText} height={props.size} width={props.size} />
      )}
    </a>
  );
};
