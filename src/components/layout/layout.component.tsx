import type { FC } from "react";
import { useCallback, useMemo, useState } from "react";
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

const ThemeToggle = styled.button`
  background-color: ${({ theme }) => theme.backgroundSecondary};
  border: none;
  border-radius: 100%;
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  font-size: 1rem;
  padding: 0.25rem;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  color: ${({ theme }) => theme.textPrimary};

  &:hover {
    cursor: pointer;
  }
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

  const themeText = useMemo(() => (theme === defaultTheme ? "☀︎" : "☾"), [theme]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ThemeToggle onClick={toggleTheme}>{themeText}</ThemeToggle>
      <Main center={center}>{children}</Main>
    </ThemeProvider>
  );
};

export { Layout };
