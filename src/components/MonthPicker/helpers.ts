import { increaseMonth } from 'utils/date';

export function getInitialDate() {
  const currentDate = new Date();

  return increaseMonth(currentDate);
}
