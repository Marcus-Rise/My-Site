import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    backgroundTheme: string;
    backgroundPrimary: string;
    textPrimary: string;
    textSecondary: string;
  }
}
