import { useCallback, useState } from "react";

enum ThemePreferencesEnum {
  DARK = "dark",
  LIGHT = "light",
  SYSTEM = "system",
}

type ThemePreferences = ThemePreferencesEnum | string;

const THEME_PREFERENCES_STORAGE_KEY = "THEME_PREFERENCES";

const useThemePreferences = (): [ThemePreferences, (preferences: ThemePreferences) => void] => {
  const [preferences, setPreferences] = useState<ThemePreferences>(() => {
    try {
      const restoredPreferences = localStorage.getItem(THEME_PREFERENCES_STORAGE_KEY);

      return restoredPreferences ?? ThemePreferencesEnum.SYSTEM;
    } catch {
      return ThemePreferencesEnum.SYSTEM;
    }
  });

  const savePreferences = useCallback((data: ThemePreferences) => {
    setPreferences(data);
    localStorage.setItem(THEME_PREFERENCES_STORAGE_KEY, data);
  }, []);

  return [preferences, savePreferences];
};

export { useThemePreferences, ThemePreferencesEnum };