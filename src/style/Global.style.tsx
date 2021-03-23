import "styled-components"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
body{
   font-family: 'JetBrains Mono', monospace;

  font-size:62,5%;
}


h1{
  font-family: 'Share Tech Mono', monospace;
  font-size: 4rem;
}
option{
  font-size:1rem;
   text-align:center;
   font-weight:600;
   
 }
`

export default GlobalStyle;