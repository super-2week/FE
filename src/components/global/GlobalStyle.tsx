import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  // web font
  :root{
    input{
      outline: none;
      border: none;
    }
    button{
      outline:none;
    }
  }

  ul,
  li {
    margin: 0;
    list-style: none;
  }

  // reset CSS
  ${reset}

`;

export default GlobalStyle;
