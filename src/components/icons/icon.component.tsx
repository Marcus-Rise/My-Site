import React from "react";
import styled, { css } from "styled-components";

const IconSvg = styled.svg`
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

export { IconSvg };
