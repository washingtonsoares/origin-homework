import {
  datesHaveSameMonth,
  datesHaveSameYear,
  decreaseMonth
} from 'utils/date';

export function shouldDisablePreviousMonth(selectedDate: Date) {
  const previousDate = decreaseMonth(selectedDate);
  const currentDate = new Date();

  const areMonthsEqual = datesHaveSameMonth(previousDate, currentDate);
  const areYearsEqual = datesHaveSameYear(previousDate, currentDate);

  return areMonthsEqual && areYearsEqual;
}
