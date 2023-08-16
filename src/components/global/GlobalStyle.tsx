import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  // web font
  :root{
    --main-color: #4593FC;
    --sub-color:#E8F3FF;

    --white-color : #ffffff;
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
