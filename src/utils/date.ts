import { DEFAULT_LOCALE } from 'constants/locale';

const DEFAULT_INCREMENT = 1;
const NUMBER_OF_MONTHS = 12;

export function getMonthTextFromDate(date: Date) {
  const formatter = new Intl.DateTimeFormat(DEFAULT_LOCALE, { month: 'long' });

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

export function datesHaveSameMonth(date1: Date, date2: Date) {
  return date1.getMonth() === date2.getMonth();
}

export function datesHaveSameYear(date1: Date, date2: Date) {
  return date1.getFullYear() === date2.getFullYear();
}
