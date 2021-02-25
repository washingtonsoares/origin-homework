import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import GlobalStyle from './theme/globalStyle';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
    </ThemeProvider>
  );
}

export default App;
