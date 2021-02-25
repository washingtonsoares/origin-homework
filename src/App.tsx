import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import GlobalStyle from './theme/globalStyle';
import theme from './theme';
import SavingGoal from './pages/SavingGoal';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <SavingGoal />
    </ThemeProvider>
  );
}

export default App;
