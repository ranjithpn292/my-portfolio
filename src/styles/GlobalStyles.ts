import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*{
margin:0;
padding:0;
box-sizing:border-box;
scroll-behavior:smooth;
}

html{
scroll-behavior:smooth;
}

body{

font-family:${({ theme }) => theme.fonts.body};

background:${({ theme }) => theme.colors.background};

color:${({ theme }) => theme.colors.text};

overflow-x:hidden;

-webkit-font-smoothing:antialiased;

}

a{
text-decoration:none;
color:inherit;
}

button{
font-family:inherit;
cursor:pointer;
}

img{
max-width:100%;
display:block;
}

section{

padding:120px 10%;

}

::-webkit-scrollbar{

width:8px;

}

::-webkit-scrollbar-thumb{

background:${({ theme }) => theme.colors.primary};

border-radius:10px;

}

`;

export default GlobalStyles;
