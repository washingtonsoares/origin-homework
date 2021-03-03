import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import GlobalStyle from './theme/globalStyle';
import theme from './theme';
import SavingGoalPage from './pages/SavingGoal';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <SavingGoalPage />
    </ThemeProvider>
  );
}

export default App;
