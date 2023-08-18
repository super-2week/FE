import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  // web font
  :root{
    --main-color: #4593FC;
    --sub-color:#E8F3FF;

    --sub-font-color : #ffffff;
    --main-font-color : rgba(0,0,0,.8);

    --item-boxshadow : 0px 4px 24px 0px rgba(123,123,123,0.15);
    --button-boxshadow : 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    input{
      outline: none;
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
