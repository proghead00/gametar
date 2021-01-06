import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}

html{

 &::-webkit-scrollbar {
  width: 12px;
}
&::-webkit-scrollbar-thumb {
 background-color #20bf55;
background-image linear-gradient(315deg, #20bf55 0%, #01baef 54%);

  border-radius: 10px;
}

}
body{
    font-family: 'Lato', sans-serif;
 width: 100%;
}
h2{
    font-size: 3rem;
font-family: 'Poppins', sans-serif;
}

h3{
    font-size: 1.3rem;
    color: #333;
    padding: 1.5rem 0rem;
}
p{
    font-size:1.2rem;
    line-height: 200%;
    color: #696969;
}

a{
    text-decoration: none;
    color: #333;
}
img{
    display:block;
}
`;

export default GlobalStyles;
