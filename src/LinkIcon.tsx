import React from "react";
import Image from "next/image";
import { useAmp } from "next/amp";

interface ILink {
  linkHref: string;
  imgSrc: string;
  altText: string;
  size: number | string;
}

const LinkIcon: React.FC<Readonly<ILink>> = (props) => {
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

export { LinkIcon };
export type { ILink };
