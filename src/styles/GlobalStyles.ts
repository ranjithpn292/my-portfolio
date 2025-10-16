// src/styles/GlobalStyles.ts
import { createGlobalStyle } from "styled-components";
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fonts: {
      body: string;
      heading: string;
    };
    colors: {
      primary: string;
      light: string;
      white: string;
      textPrimary: string;
    };
  }
}

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.body};
    background-color: ${({ theme }) => theme.colors.light};
    color: ${({ theme }) => theme.colors.textPrimary};
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5 {
    font-family: ${({ theme }) => theme.fonts.heading};
  }
`;

export default GlobalStyles;
