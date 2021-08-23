import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    backgroundTheme: string;
    backgroundPrimary: string;
    backgroundSecondary: string;
    textPrimary: string;
    textSecondary: string;
  }
}
