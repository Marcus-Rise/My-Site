import type { DefaultTheme } from "styled-components";

const defaultTheme: DefaultTheme = {
  backgroundTheme: "#445768",
  backgroundPrimary: "#fff",
  backgroundSecondary: "rgb(224,224,224)",
  textPrimary: "rgba(0, 0, 0, 0.87)",
  textSecondary: "rgba(0, 0, 0, 0.54)",
};

const createTheme = (theme: Partial<DefaultTheme>): DefaultTheme => {
  return {
    ...defaultTheme,
    ...theme,
  };
};

const darkTheme = createTheme({
  backgroundTheme: "#272b2f",
  backgroundPrimary: "#8a90ab78",
  backgroundSecondary: "#272b2f",
  textPrimary: "#fff",
  textSecondary: "#e7e6e6c7",
});

export { defaultTheme, darkTheme };
