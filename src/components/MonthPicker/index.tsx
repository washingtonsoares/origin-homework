import { useEffect, useState } from 'react';
import { getInitialDate } from './helpers';
import {
  decreaseMonth,
  getMonthTextFromDate,
  getYearFromDate,
  increaseMonth
} from 'utils/date';
import * as Styled from './styled';

type Props = {
  onChange: (date: Date) => void;
};

function MonthPicker({ onChange }: Props) {
  const [date, setDate] = useState(() => getInitialDate());

  useEffect(() => {
    onChange(date);
  }, [onChange, date]);

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
