import { createGlobalStyle } from 'styled-components';
import { fontFamilies } from 'theme';

const GlobalStyle = createGlobalStyle`
  body, html {
    padding: 0;
    margin: 0;
  }

  body {
    font-family: ${fontFamilies.workSans};
    background-color: ${({ theme }) => theme.colors.bgPrimary};
  }

  h1, h3, h5 {
    margin: 0;
  }

  h5 {
    font-weight: normal;
  }
`;

export default GlobalStyle;
