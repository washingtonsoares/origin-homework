import Button from 'components/Button';
import MonthPicker from 'components/MonthPicker';
import { useEffect, useState } from 'react';
import { getMonthDiff } from 'utils/date';
import { getMonthlyDeposits, getInitialDate } from './helpers';
import SimulationResume from './SimulationResume';
import * as Styled from './styled';

function Form() {
  const [totalAmount, setTotalAmount] = useState<number | undefined>();
  const [selectedDate, setselectedDate] = useState(() => getInitialDate());
  const [monthsDiff, setMonthsDiff] = useState(0);
  const [monthlyDeposits, setMonthlyDeposits] = useState(0);

  useEffect(() => {
    const _monthsDiff = getMonthDiff(new Date(), selectedDate);
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
    <Styled.Form onSubmit={handleSubmit}>
      <Styled.FieldsWrapper>
        <Styled.CurrencyInput
          value={totalAmount}
          onChange={handleTotalAmountChange}
        />
        <MonthPicker startDate={selectedDate} onChange={handleMonthChange} />
      </Styled.FieldsWrapper>
      <SimulationResume
        totalAmount={totalAmount}
        monthsDiff={monthsDiff}
        monthlyDeposits={monthlyDeposits}
        completionDate={selectedDate}
      />
      <Styled.ButtonWrapper>
        <Button>Confirm</Button>
      </Styled.ButtonWrapper>
    </Styled.Form>
  );
}

export default Form;
