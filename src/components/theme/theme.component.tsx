import dynamic from "next/dynamic";
import styled, { ThemeProvider } from "styled-components";
import type { FC } from "react";
import { useMemo } from "react";
import { ThemePreferencesEnum, useTheme } from "./theme.hook";

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

const Theme: FC = ({ children }) => {
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
    <>
      <ThemeProvider theme={theme}>
        <ThemeToggleProvider onClick={toggleTheme}>{preferencesIcon}</ThemeToggleProvider>
        {children}
      </ThemeProvider>
    </>
  );
};

export { Theme };
