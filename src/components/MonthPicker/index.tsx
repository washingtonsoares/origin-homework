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
import {
  ButtonWrapper,
  Wrapper,
  LeftArrowIcon,
  RightArrowIcon,
  SelectedYear,
  DateWrapper,
  MonthPickerContainer,
  SelectedMonth
} from './styled';

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
    <Wrapper onKeyDown={handleKeyDown}>
      <FieldLabel htmlFor="month-picker">Reach goal by</FieldLabel>
      <MonthPickerContainer
        id="month-picker"
        aria-label="Select a month"
        tabIndex={0}
        data-testid="month-picker"
      >
        <ButtonWrapper
          type="button"
          title="Decrease month"
          disabled={isPreviousMonthDisabled}
          onClick={handleDecrement}
          tabIndex={-1}
        >
          <LeftArrowIcon />
        </ButtonWrapper>
        <DateWrapper>
          <SelectedMonth>{getMonthTextFromDate(startDate)}</SelectedMonth>
          <SelectedYear>{getYearFromDate(startDate)}</SelectedYear>
        </DateWrapper>
        <ButtonWrapper
          type="button"
          title="Increase month"
          onClick={handleIncrement}
          tabIndex={-1}
        >
          <RightArrowIcon />
        </ButtonWrapper>
      </MonthPickerContainer>
    </Wrapper>
  );
}

export default MonthPicker;
