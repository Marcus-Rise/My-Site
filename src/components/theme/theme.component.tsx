import type { FC } from "react";
import { useEffect, useMemo } from "react";
import { ThemePreference, ThemeProvider, useTheme } from "@marcus-rise/react-theme";
import styles from "./theme.module.scss";

const ThemeConsumer: FC = () => {
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

  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, [isDarkTheme]);

  return (
    <button className={styles.button} onClick={toggleTheme} title={title}>
      {icon}
    </button>
  );
};

const Theme: FC = () => (
  <ThemeProvider>
    <ThemeConsumer />
  </ThemeProvider>
);

export { Theme };
