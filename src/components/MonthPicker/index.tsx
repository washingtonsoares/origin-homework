import { useEffect, useState } from 'react';
import {
  decreaseMonth,
  getMonthTextFromDate,
  getYearFromDate,
  increaseMonth
} from 'utils/date';
import * as Styled from './styled';

type Props = {
  onChange: (date: Date) => void;
  initialDate: Date;
};

function MonthPicker({ onChange, initialDate }: Props) {
  const [date, setDate] = useState(initialDate);

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
      <Styled.LeftArrowIcon
        title="Decrease month"
        role="button"
        tabIndex={0}
        onClick={handleDecrement}
      />
      <Styled.MonthWrapper>
        <Styled.SelectedMonth>
          {getMonthTextFromDate(date)}
        </Styled.SelectedMonth>
        <Styled.SelectedYear>{getYearFromDate(date)}</Styled.SelectedYear>
      </Styled.MonthWrapper>
      <Styled.RightArrowIcon
        title="Increase month"
        role="button"
        tabIndex={0}
        onClick={handleIncrement}
      />
    </Styled.Wrapper>
  );
}

export default MonthPicker;
