import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body, html {
    padding: 0;
    margin: 0;
  }

  body {
    font-family: 'Work Sans', sans-serif;
    background-color: ${({ theme }) => theme.colors.bgPrimary};
  }

  h1, h5 {
    margin: 0;
  }

  h5 {
    font-weight: normal;
  }
`;

export default GlobalStyle;
