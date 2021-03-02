import { KeyboardEvent } from 'react';
import {
  decreaseMonth,
  getMonthTextFromDate,
  getYearFromDate,
  increaseMonth
} from 'utils/date';
import { KEY_CODES } from 'utils/keyboard';
import { shouldDisablePreviousMonth } from './helpers';
import FieldLabel from 'components/FieldLabel';
import * as Styled from './styled';

type Props = {
  onChange: (date: Date) => void;
  startDate: Date;
};

function MonthPicker({ onChange, startDate }: Props) {
  const disablePreviousMonth = shouldDisablePreviousMonth(startDate);

  const handleDecrement = () => {
    if (disablePreviousMonth) {
      return;
    }

    const newDate = decreaseMonth(startDate);
    onChange(newDate);
  };

  const handleIncrement = () => {
    const newDate = increaseMonth(startDate);
    onChange(newDate);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const actionsByKeyCode = {
      [KEY_CODES.ARROW_LEFT]: handleDecrement,
      [KEY_CODES.ARROW_RIGHT]: handleIncrement
    };

    actionsByKeyCode[event.code]?.();
  };

  return (
    <Styled.Wrapper onKeyDown={handleKeyDown}>
      <FieldLabel htmlFor="month-picker">Reach goal by</FieldLabel>
      <Styled.MonthPickerContainer id="month-picker" tabIndex={0}>
        <Styled.ButtonWrapper
          type="button"
          title="Decrease month"
          onClick={handleDecrement}
          disabled={disablePreviousMonth}
        >
          <Styled.LeftArrowIcon />
        </Styled.ButtonWrapper>
        <Styled.MonthWrapper>
          <Styled.SelectedMonth>
            {getMonthTextFromDate(startDate)}
          </Styled.SelectedMonth>
          <Styled.SelectedYear>
            {getYearFromDate(startDate)}
          </Styled.SelectedYear>
        </Styled.MonthWrapper>
        <Styled.ButtonWrapper
          type="button"
          title="Increase month"
          onClick={handleIncrement}
        >
          <Styled.RightArrowIcon />
        </Styled.ButtonWrapper>
      </Styled.MonthPickerContainer>
    </Styled.Wrapper>
  );
}

export default MonthPicker;
