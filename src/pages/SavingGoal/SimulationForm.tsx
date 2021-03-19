import Button from 'components/Button';
import MonthPicker from 'components/MonthPicker';
import { GOALS_KEY } from 'constants/localStorage';
import { useEffect, useState } from 'react';
import { Goal } from 'types/Goal';
import { getMonthDiff } from 'utils/date';
import { getGoals } from 'utils/goal';
import { getMonthlyDeposits, getInitialDate } from './helpers';
import SimulationResume from './SimulationResume';
import {
  SimulationForm,
  FieldsWrapper,
  CurrencyInput,
  ButtonWrapper
} from './styled';

type Props = {
  goal: Goal | undefined;
};

function SimulationFormComponent({ goal }: Props) {
  const [totalAmount, setTotalAmount] = useState<number | undefined>(1000);
  const [selectedDate, setselectedDate] = useState(() => getInitialDate());
  const [monthsDiff, setMonthsDiff] = useState(0);
  const [monthlyDeposits, setMonthlyDeposits] = useState(0);
  // TODO: Mover pontos de complexidade para um custom hook
  useEffect(() => {
    if (goal?.amount) {
      setTotalAmount(goal?.amount);
    }
    if (goal?.reachGoalBy) {
      setselectedDate(new Date(goal?.reachGoalBy));
    }
  }, [goal]);

  useEffect(() => {
    const currentDate = new Date();
    const _monthsDiff = getMonthDiff(currentDate, selectedDate);
    setMonthsDiff(_monthsDiff);
  }, [selectedDate]);

  useEffect(() => {
    const _monthlyDeposits = getMonthlyDeposits(totalAmount, monthsDiff);
    setMonthlyDeposits(_monthlyDeposits);
  }, [totalAmount, monthsDiff]);

  const handleMonthChange = (date: Date) => {
    setselectedDate(date);
  };

  const handleTotalAmountChange = (amount: number | undefined) => {
    setTotalAmount(amount);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: Abstrair pontos de complexidade para funções externas
    const payload = {
      ...goal,
      amount: totalAmount,
      reachGoalBy: selectedDate
    };

    const goalsFromLocalStorage = getGoals();

    const updatedGoals = goalsFromLocalStorage.map((currentGoal) => {
      if (currentGoal.id === goal?.id) {
        return payload;
      }
      return currentGoal;
    });

    localStorage.setItem(GOALS_KEY, JSON.stringify(updatedGoals));
  };

  return (
    <SimulationForm onSubmit={handleSubmit}>
      <FieldsWrapper>
        <CurrencyInput value={totalAmount} onChange={handleTotalAmountChange} />
        <MonthPicker startDate={selectedDate} onChange={handleMonthChange} />
      </FieldsWrapper>
      <SimulationResume
        totalAmount={totalAmount}
        monthsDiff={monthsDiff}
        monthlyDeposits={monthlyDeposits}
        completionDate={selectedDate}
      />
      <ButtonWrapper>
        <Button>Confirm</Button>
      </ButtonWrapper>
    </SimulationForm>
  );
}

export default SimulationFormComponent;
