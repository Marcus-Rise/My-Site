import type { FC } from "react";
import { useCallback, useState } from "react";
import { darkTheme, defaultTheme, GlobalStyles } from "../../styles";
import styled, { css, ThemeProvider } from "styled-components";

interface ILayoutProps {
  center?: boolean;
}

const Main = styled.main<{
  center?: boolean;
}>`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.backgroundTheme};

  ${({ center }) =>
    !!center &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
    `}
`;

const Layout: FC<ILayoutProps> = ({ center, children }) => {
  const [theme, setTheme] = useState(defaultTheme);

  const toggleTheme = useCallback(() => {
    if (theme === defaultTheme) {
      setTheme(darkTheme);
    } else {
      setTheme(defaultTheme);
    }
  }, [theme]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <button onClick={toggleTheme}>toggle theme</button>
      <Main center={center}>{children}</Main>
    </ThemeProvider>
  );
};

export { Layout };
