import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyles = createGlobalStyle`

   body {
    padding:20px 30px;
    background-color: #2b2b2b;
    margin: 0;
    font-family: monospace,
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
      font-weight:900;
      font-size:16px;
      color: #FFFFFF;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
  }

  ul {
    list-style: none;
    padding: 0;
    margin:0;
  }

  a{
    text-decoration: none;
    color: #ffffff;
  }
`;
