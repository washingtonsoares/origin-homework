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
  const isPreviousMonthDisabled = shouldDisablePreviousMonth(startDate);

  const handleDecrement = () => {
    if (isPreviousMonthDisabled) {
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
      <Styled.MonthPickerContainer
        id="month-picker"
        aria-label="Select a month"
        tabIndex={0}
        data-testid="month-picker"
      >
        <Styled.ButtonWrapper
          type="button"
          title="Decrease month"
          disabled={isPreviousMonthDisabled}
          onClick={handleDecrement}
          tabIndex={-1}
        >
          <Styled.LeftArrowIcon />
        </Styled.ButtonWrapper>
        <Styled.DateWrapper>
          <Styled.SelectedMonth>
            {getMonthTextFromDate(startDate)}
          </Styled.SelectedMonth>
          <Styled.SelectedYear>
            {getYearFromDate(startDate)}
          </Styled.SelectedYear>
        </Styled.DateWrapper>
        <Styled.ButtonWrapper
          type="button"
          title="Increase month"
          onClick={handleIncrement}
          tabIndex={-1}
        >
          <Styled.RightArrowIcon />
        </Styled.ButtonWrapper>
      </Styled.MonthPickerContainer>
    </Styled.Wrapper>
  );
}

export default MonthPicker;
