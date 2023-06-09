import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0; 
    padding:0; 
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    overflow-x: hidden;
  }

  body {
    font-family: 'Lato','Noto Sans KR',sans-serif;
    background-color: #f3f3f3;
    line-height: 1.5;
  }
`;

export default GlobalStyle;
