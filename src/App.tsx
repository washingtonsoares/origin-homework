import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import GlobalStyle from './theme/globalStyle';
import theme from './theme';
import SavingGoalPage from './pages/SavingGoal';
import MOCKED_GOALS from './data/goals.json';
import { GOALS_KEY } from 'constants/localStorage';
import { getGoals } from 'utils/goal';
import { Goal } from 'types/Goal';

function App() {
  const [goals, setGoals] = useState<Goal[]>([]);

  useEffect(() => {
    const goals = getGoals();

    if (goals.length === 0) {
      localStorage.setItem(GOALS_KEY, JSON.stringify(MOCKED_GOALS));
    }

    setGoals(goals.length > 0 ? goals : MOCKED_GOALS);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <SavingGoalPage goals={goals} />
    </ThemeProvider>
  );
}

export default App;
