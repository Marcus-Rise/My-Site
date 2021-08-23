import { useCallback, useEffect, useState } from "react";
import { darkTheme, defaultTheme } from "../../styles";

enum ThemePreferencesEnum {
  DARK = "dark",
  LIGHT = "light",
  SYSTEM = "system",
}

type Theme = ThemePreferencesEnum | string;

const THEME_PREFERENCES_STORAGE_KEY = "THEME_PREFERENCES";

const usePreferences = (): [Theme, (theme: Theme) => void] => {
  const [preferences, setPreferences] = useState<Theme>(() => {
    try {
      const restoredPreferences = localStorage.getItem(THEME_PREFERENCES_STORAGE_KEY);

      return restoredPreferences ?? ThemePreferencesEnum.SYSTEM;
    } catch {
      return ThemePreferencesEnum.SYSTEM;
    }
  });

  const savePreferences = useCallback((data: Theme) => {
    setPreferences(data);
    localStorage.setItem(THEME_PREFERENCES_STORAGE_KEY, data);
  }, []);

  return [preferences, savePreferences];
};

const useTheme = () => {
  const [preferences, savePreferences] = usePreferences();
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = useCallback(() => {
    switch (preferences) {
      case ThemePreferencesEnum.LIGHT: {
        savePreferences(ThemePreferencesEnum.DARK);
        break;
      }
      case ThemePreferencesEnum.DARK: {
        savePreferences(ThemePreferencesEnum.SYSTEM);
        break;
      }
      default: {
        savePreferences(ThemePreferencesEnum.LIGHT);
        break;
      }
    }
  }, [preferences, savePreferences]);

  useEffect(() => {
    setIsDark(preferences === ThemePreferencesEnum.DARK);
  }, [preferences]);

  useEffect(() => {
    const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const eventName = "change";
    const eventListener = (event: MediaQueryListEvent) => {
      if (preferences === ThemePreferencesEnum.SYSTEM) {
        setIsDark(event.matches);
      }
    };

    if (preferences === ThemePreferencesEnum.SYSTEM) {
      setIsDark(darkModeQuery.matches);

      darkModeQuery.addEventListener(eventName, eventListener);
    } else {
      darkModeQuery.removeEventListener(eventName, eventListener);
    }
  }, [preferences]);

  const theme = isDark ? darkTheme : defaultTheme;

  return {
    theme,
    preferences,
    toggleTheme,
  };
};

export { useTheme, ThemePreferencesEnum };
