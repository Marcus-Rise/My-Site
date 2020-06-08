import React from "react";

export interface ILink {
  linkHref: string;
  imgSrc: string;
  altText: string;
}

export const LinkIcon: React.FC<ILink> = (props) => {
  const iconSize = 25;

  return (
    <a href={props.linkHref} target="_blank" rel="noopener noreferrer">
      <img
        src={props.imgSrc}
        alt={props.altText}
        height={iconSize}
        width={iconSize}
      />
    </a>
  );
};
