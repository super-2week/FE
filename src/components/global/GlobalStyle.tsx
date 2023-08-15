import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  // web font
  :root{
    input{
      outline: none;
    }
    button{
      outline:none;
    }
  }

  // reset CSS
  ${reset}

`;

export default GlobalStyle;
