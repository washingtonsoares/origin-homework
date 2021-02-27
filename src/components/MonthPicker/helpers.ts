const DEFAULT_INCREMENT = 1;
const NUMBER_OF_MONTHS = 12;

export function getInitialDate() {
  const currentDate = new Date();

  return increaseMonth(currentDate);
}

export function getMonthTextFromDate(date: Date) {
  const formatter = new Intl.DateTimeFormat('en-US', { month: 'long' });

  return formatter.format(date);
}

export function getYearFromDate(date: Date) {
  return date.getFullYear();
}

export function increaseMonth(date: Date) {
  const newDate = new Date(date);
  newDate.setMonth(date.getMonth() + DEFAULT_INCREMENT);

  return newDate;
}

export function decreaseMonth(date: Date) {
  const newDate = new Date(date);
  newDate.setMonth(date.getMonth() - DEFAULT_INCREMENT);

  return newDate;
}

export function getMonthDiff(dateFrom: Date, dateTo: Date) {
  const diffBetweenYears = dateTo.getFullYear() - dateFrom.getFullYear();
  const diffBetweenMonths = dateTo.getMonth() - dateFrom.getMonth();

  return diffBetweenMonths + NUMBER_OF_MONTHS * diffBetweenYears;
}
