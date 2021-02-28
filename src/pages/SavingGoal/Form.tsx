import Button from 'components/Button';
import CurrencyInput from 'components/CurrencyInput';
import MonthPicker from 'components/MonthPicker';
import { getInitialDate } from 'components/MonthPicker/helpers';
import { useState } from 'react';
import { getMonthDiff } from 'utils/date';
import { getMonthlyDeposits } from './helpers';
import MonthlyAmountResume from './MonthlyAmountResume';
import * as Styled from './styled';

function Form() {
  const [totalAmount, setTotalAmount] = useState<number>();
  const [selectedDate, setselectedDate] = useState(() => getInitialDate());
  const monthsAmount = getMonthDiff(new Date(), selectedDate);
  const monthlyDeposits = getMonthlyDeposits(totalAmount, monthsAmount);

  const handleMonthChange = (date: Date) => {
    setselectedDate(date);
  };

  const handleTotalAmountChange = (amount: number) => {
    setTotalAmount(amount);
  };

  return (
    <Styled.Form>
      <Styled.FieldsWrapper>
        <Styled.FieldWrapper>
          <Styled.FieldLabel>Total amount</Styled.FieldLabel>
          <CurrencyInput onChange={handleTotalAmountChange} />
        </Styled.FieldWrapper>
        <Styled.FieldWrapper>
          <Styled.FieldLabel>Reach goal by</Styled.FieldLabel>
          <MonthPicker
            initialDate={selectedDate}
            onChange={handleMonthChange}
          />
        </Styled.FieldWrapper>
      </Styled.FieldsWrapper>
      {!!totalAmount && (
        <>
          <MonthlyAmountResume
            totalAmount={totalAmount}
            monthsAmount={monthsAmount}
            monthlyDeposits={monthlyDeposits}
            completionDate={selectedDate ?? new Date()}
          />
          <Styled.ButtonWrapper>
            <Button>Confirm</Button>
          </Styled.ButtonWrapper>
        </>
      )}
    </Styled.Form>
  );
}

export default Form;
