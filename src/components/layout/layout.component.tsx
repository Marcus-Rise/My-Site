import type { FC, PropsWithChildren } from "react";
import { GlobalStyles } from "../../styles";
import styled, { css } from "styled-components";
import { Theme } from "../theme";
import { ThemeProvider } from "@marcus-rise/react-theme";

type LayoutProps = PropsWithChildren<{
  center?: boolean;
}>;

const Main = styled.main<{
  center?: boolean;
}>`
  width: 100%;
  height: 100%;

  ${({ center }) =>
    !!center &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
    `}
`;

const Layout: FC<LayoutProps> = ({ center, children }) => (
  <ThemeProvider>
    <Theme>
      <GlobalStyles />
      <Main center={center}>{children}</Main>
    </Theme>
  </ThemeProvider>
);

export { Layout };
