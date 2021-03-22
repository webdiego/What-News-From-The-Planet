import "styled-components"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
body{
  /* font-family: "Consolas-Normal", sans-serif;  */
  font-size:62,5%;
}


/* @font-face {
  font-family: "Consolas-Normal";
  src: url("../Fonts/consola.woff") format("woff"),
      url("../Fonts/consola.ttf") format("truetype");
} */
`
export default GlobalStyle;