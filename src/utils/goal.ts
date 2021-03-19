import { GOALS_KEY } from 'constants/localStorage';
import { Goal } from 'types/Goal';

export const getGoals = () => {
  const goalsFromLocalStorage = localStorage.getItem(GOALS_KEY);

  return JSON.parse(goalsFromLocalStorage || '[]') as Goal[];
};

export const getGoalById = (goals: Goal[], goalId: number) =>
  goals.find(({ id }) => id === goalId);
