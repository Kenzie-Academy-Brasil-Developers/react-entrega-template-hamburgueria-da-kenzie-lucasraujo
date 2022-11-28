import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

 :root{

    --Color-primary:#27AE60;
    --Color-primary-50:#93D7AF;
    --Color-secondary:#EB5757;

    --gray-100:#333333;
    --gray-50:#828282;
    --gray-20:#E0E0E0;
    --gray-0:#F5F5F5;

    --Negative:#E60000;
    --Warning:#FFCD07;
    --Sucess:#168821;
    --Information:#155BCB;
 }

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

button{
    cursor: pointer;
}

*{
    box-sizing:border-box;
    font-family: 'Inter', sans-serif;
}

a{
    color: unset;
    text-decoration:none;
}
 
 `;
