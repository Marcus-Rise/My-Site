import type { DefaultTheme } from "styled-components";

const defaultTheme: DefaultTheme = {
  backgroundTheme: "#445768",
  backgroundPrimary: "#fff",
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
});

export { defaultTheme, darkTheme };
