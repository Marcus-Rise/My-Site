import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    margin: 0;
    height: 100%;
    background-color: ${(props) => props.theme.backgroundTheme};
    transition: background-color ease ${({ theme }) => theme.transitionDelay};
  }

  #__next {
    height: 100%;
  }

  * {
    font-family: 'Roboto', sans-serif;

    color: ${(props) => props.theme.textPrimary};
    transition: color ease ${({ theme }) => theme.transitionDelay};
  }
`;

export { GlobalStyles };
