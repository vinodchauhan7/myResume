import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,600|Montserrat');

    html {
        height: 100%;
    }

    body {
        margin: 0;
        font-family: Montserrat, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        height: 100%;
        background: linear-gradient(180deg, rgb(69,72,92) 50%, rgb(90,92,109) 50%);
      }
      
      code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
          monospace;
      }
`;

export { GlobalStyle };
