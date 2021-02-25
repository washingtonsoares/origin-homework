import { ThemeProvider } from 'styled-components';
import GlobalStyle from './theme/globalStyle';
import theme from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
