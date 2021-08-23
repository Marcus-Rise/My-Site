import { useCallback, useEffect, useMemo, useState } from "react";
import { darkTheme, defaultTheme } from "../../styles";
import { ThemePreferencesEnum, useThemePreferences } from "./theme-preferences.hook";
import { useThemeSystemDark } from "./theme-system–dark.hook";

const useTheme = () => {
  const [isDark, setIsDark] = useState(false);
  const [preferences, savePreferences] = useThemePreferences();
  const isThemeSystemDark = useThemeSystemDark();

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
    if (preferences === ThemePreferencesEnum.SYSTEM) {
      setIsDark(isThemeSystemDark);
    } else {
      setIsDark(preferences === ThemePreferencesEnum.DARK);
    }
  }, [isThemeSystemDark, preferences]);

  const theme = useMemo(() => (isDark ? darkTheme : defaultTheme), [isDark]);

  return {
    theme,
    preferences,
    toggleTheme,
  };
};

export { useTheme, ThemePreferencesEnum };
