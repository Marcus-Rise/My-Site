import type { FC } from "react";
import { useMemo } from "react";
import { GlobalStyles } from "../../styles";
import styled, { css, ThemeProvider } from "styled-components";
import { ThemePreferencesEnum, useTheme } from "./theme.hook";
import dynamic from "next/dynamic";

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

const ThemeToggleProvider = dynamic(async () => ThemeToggle, { ssr: false });

const Layout: FC<ILayoutProps> = ({ center, children }) => {
  const { theme, preferences, toggleTheme } = useTheme();

  const preferencesIcon = useMemo(() => {
    switch (preferences) {
      case ThemePreferencesEnum.LIGHT: {
        return "☀︎";
      }
      case ThemePreferencesEnum.DARK: {
        return "☾";
      }
      case ThemePreferencesEnum.SYSTEM: {
        return "⌽";
      }
    }
  }, [preferences]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ThemeToggleProvider onClick={toggleTheme}>{preferencesIcon}</ThemeToggleProvider>
      <Main center={center}>{children}</Main>
    </ThemeProvider>
  );
};

export { Layout };
