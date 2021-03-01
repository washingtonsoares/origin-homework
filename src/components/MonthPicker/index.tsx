import { useCallback, useEffect } from 'react';
import {
  decreaseMonth,
  getMonthTextFromDate,
  getYearFromDate,
  increaseMonth
} from 'utils/date';
import { KEY_CODES } from 'utils/keyboard';
import { shouldDisablePreviousMonth } from './helpers';
import * as Styled from './styled';

type Props = {
  onChange: (date: Date) => void;
  startDate: Date;
};

function MonthPicker({ onChange, startDate }: Props) {
  const disablePreviousMonth = shouldDisablePreviousMonth(startDate);

  const handleIncrement = useCallback(() => {
    const newDate = increaseMonth(startDate);
    onChange(newDate);
  }, [onChange, startDate]);

  const handleDecrement = useCallback(() => {
    if (disablePreviousMonth) {
      return;
    }

    const newDate = decreaseMonth(startDate);
    onChange(newDate);
  }, [onChange, startDate, disablePreviousMonth]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      const actionsByKeyCode = {
        [KEY_CODES.ARROW_LEFT]: handleDecrement,
        [KEY_CODES.ARROW_RIGHT]: handleIncrement
      };

      actionsByKeyCode[event.code]?.();
    },
    [handleIncrement, handleDecrement]
  );

  useEffect(() => {
    document.body.addEventListener('keydown', handleKeyDown, false);

    return () => {
      document.body.removeEventListener('keydown', handleKeyDown, false);
    };
  }, [handleKeyDown]);

  return (
    <Styled.Wrapper>
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
        <Styled.SelectedYear>{getYearFromDate(startDate)}</Styled.SelectedYear>
      </Styled.MonthWrapper>
      <Styled.ButtonWrapper
        type="button"
        title="Increase month"
        onClick={handleIncrement}
      >
        <Styled.RightArrowIcon />
      </Styled.ButtonWrapper>
    </Styled.Wrapper>
  );
}

export default MonthPicker;
