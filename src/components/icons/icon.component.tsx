import React from "react";
import styled, { css } from "styled-components";

const IconSvg = styled.svg`
  ${(props) => {
    const color = props.theme.iconColor;

    return css`
      path {
        transition: stroke ease ${({ theme }) => theme.transitionDelay},
          fill ease ${({ theme }) => theme.transitionDelay};
        stroke: ${color};
        fill: ${color};
      }
    `;
  }}
`;

export { IconSvg };
