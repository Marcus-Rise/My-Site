import type { FC } from "react";
import React from "react";
import styled, { css } from "styled-components";

interface ISocialLinkProps {
  href: string;
  icon: Icon;
  alt: string;
  size: number | string;
  className?: string;
}

const Icon = styled.svg`
  ${(props) => {
    const color = props.theme.iconColor;

    return css`
      path {
        stroke: ${color};
        fill: ${color};
      }
    `;
  }}
`;

const SocialLink: FC<ISocialLinkProps> = ({ className, href, size, icon, alt }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" title={alt}>
    <Icon as={icon} width={size} height={size} className={className} />
  </a>
);

export { SocialLink };
