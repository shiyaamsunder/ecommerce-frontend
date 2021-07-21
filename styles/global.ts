import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

html{
  scroll-behavior: smooth
}
html,
body {
  padding: 0;
  margin: 0;
  font-family: 'IBM Plex Sans', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  color: ${({ theme }) => theme.colors.primaryText};
  font-size: ${({ theme }) => theme.text.base};
  
}

h1,h2,h3,h4,h5,h6{
  font-family: 'Prata', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
`;

export default GlobalStyles;
