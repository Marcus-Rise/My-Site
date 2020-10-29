import React from "react";
import Image from "next/image";

export interface ILink {
  linkHref: string;
  imgSrc: string;
  altText: string;
}

export const LinkIcon: React.FC<ILink> = (props) => {
  const iconSize = 25;

  return (
    <a href={props.linkHref} target="_blank" rel="noopener noreferrer">
      <Image src={props.imgSrc} alt={props.altText} height={iconSize} width={iconSize} />
    </a>
  );
};
