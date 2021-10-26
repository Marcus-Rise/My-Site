import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    isDark: boolean;
    backgroundTheme: string;
    backgroundPrimary: string;
    backgroundSecondary: string;
    textPrimary: string;
    textSecondary: string;
    iconColor: string;
    borderColor: string;
    transitionDelay: string;
  }
}
