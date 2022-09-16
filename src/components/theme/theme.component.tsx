import dynamic from "next/dynamic";
import styled, { ThemeProvider } from "styled-components";
import type { FC, PropsWithChildren } from "react";
import { useMemo } from "react";
import { ThemePreference, useTheme } from "@marcus-rise/react-theme";
import Head from "next/head";
import { darkTheme, defaultTheme } from "../../styles";

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
  transition: background-color ease ${({ theme }) => theme.transitionDelay},
    color ease ${({ theme }) => theme.transitionDelay};

  &:hover {
    cursor: pointer;
  }
`;

const ThemeToggleProvider = dynamic(async () => ThemeToggle, { ssr: false });

const Theme: FC<PropsWithChildren> = ({ children }) => {
  const { isDarkTheme, preferences, toggleTheme } = useTheme();

  const { icon, title } = useMemo(() => {
    let meta: { icon: string; title: string };

    switch (preferences) {
      case ThemePreference.LIGHT: {
        meta = { title: "Light", icon: "☀︎" };
        break;
      }
      case ThemePreference.DARK: {
        meta = { title: "Dark", icon: "☾" };
        break;
      }
      case ThemePreference.SYSTEM:
      default: {
        meta = { title: "System", icon: "⌽" };
        break;
      }
    }

    return meta;
  }, [preferences]);

  const currentTheme = useMemo(() => (isDarkTheme ? darkTheme : defaultTheme), [isDarkTheme]);

  return (
    <>
      <Head>
        <meta name={"theme-color"} content={currentTheme.backgroundPrimary} />
      </Head>
      <ThemeProvider theme={currentTheme}>
        <ThemeToggleProvider onClick={toggleTheme} title={title}>
          {icon}
        </ThemeToggleProvider>
        {children}
      </ThemeProvider>
    </>
  );
};

export { Theme };
