import { decreaseMonth } from 'utils/date';

export function shouldDisablePreviousMonth(selectedDate: Date) {
  const previousSelectedDate = decreaseMonth(selectedDate);
  const currentDate = new Date();

  return previousSelectedDate.getMonth() === currentDate.getMonth();
}
