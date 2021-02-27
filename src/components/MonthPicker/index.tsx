import { useState } from 'react';
import {
  decreaseMonth,
  getMonthTextFromDate,
  getYearFromDate,
  increaseMonth,
  getInitialDate
} from './helpers';
import * as Styled from './styled';

function MonthPicker() {
  const [date, setDate] = useState(() => getInitialDate());

  const handleIncrement = () => {
    setDate((currentDate) => increaseMonth(currentDate));
  };

  const handleDecrement = () => {
    setDate((currentDate) => decreaseMonth(currentDate));
  };

  return (
    <Styled.Wrapper>
      <Styled.LeftArrowIcon role="button" onClick={handleDecrement} />
      <Styled.MonthWrapper>
        <Styled.SelectedMonth>
          {getMonthTextFromDate(date)}
        </Styled.SelectedMonth>
        <Styled.SelectedYear>{getYearFromDate(date)}</Styled.SelectedYear>
      </Styled.MonthWrapper>
      <Styled.RightArrowIcon role="button" onClick={handleIncrement} />
    </Styled.Wrapper>
  );
}

export default MonthPicker;
