import Button from 'components/Button';
import MonthPicker from 'components/MonthPicker';
import { useEffect, useState } from 'react';
import { getMonthDiff } from 'utils/date';
import { getMonthlyDeposits, getInitialDate } from './helpers';
import SimulationResume from './SimulationResume';
import {
  SimulationForm,
  FieldsWrapper,
  CurrencyInput,
  ButtonWrapper
} from './styled';

function SimulationFormComponent() {
  const [totalAmount, setTotalAmount] = useState<number | undefined>(1000);
  const [selectedDate, setselectedDate] = useState(() => getInitialDate());
  const [monthsDiff, setMonthsDiff] = useState(0);
  const [monthlyDeposits, setMonthlyDeposits] = useState(0);

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
