import type { DefaultTheme } from "styled-components";

const defaultTheme: DefaultTheme = {
  isDark: false,
  backgroundTheme: "#445768",
  backgroundPrimary: "#fff",
  backgroundSecondary: "rgb(224,224,224)",
  textPrimary: "rgba(0, 0, 0, 0.87)",
  textSecondary: "rgba(0, 0, 0, 0.54)",
  iconColor: "#445768",
  borderColor: "#939393",
  transitionDelay: "1s",
};

const createTheme = (theme: Partial<DefaultTheme>): DefaultTheme => ({
  ...defaultTheme,
  ...theme,
});

const darkTheme = createTheme({
  isDark: true,
  backgroundTheme: "#272b2f",
  backgroundPrimary: "#8a90ab78",
  backgroundSecondary: "#7a818c",
  textPrimary: "#fff",
  textSecondary: "#e7e6e6c7",
  iconColor: "#fff",
  borderColor: "#7a818c",
});

export { defaultTheme, darkTheme };
