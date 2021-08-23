import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    margin: 0;
    height: 100%;
  }

  #__next {
    height: 100%;
  }

  * {
    font-family: 'Roboto', sans-serif;

    color: ${(props) => props.theme.textPrimary};
  }
`;

export { GlobalStyles };
