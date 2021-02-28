import {
  decreaseMonth,
  getMonthDiff,
  getMonthTextFromDate,
  getYearFromDate,
  increaseMonth
} from 'utils/date';

test('should get month text from date', () => {
  const dateMock = new Date(2021, 2, 1);

  expect(getMonthTextFromDate(dateMock)).toEqual('March');
});

test('should get year from date', () => {
  const dateMock = new Date(2021, 2, 1);

  expect(getYearFromDate(dateMock)).toEqual(2021);
});

test('should increase month of a date', () => {
  const dateMock = new Date(2021, 11, 1);
  const expectedDate = new Date(2022, 0, 1);
  const increasedDate = increaseMonth(dateMock);

  expect(increasedDate.toISOString()).toEqual(expectedDate.toISOString());
});

test('should decrease month of a date', () => {
  const dateMock = new Date(2021, 0, 1);
  const expectedDate = new Date(2020, 11, 1);
  const decreasedDate = decreaseMonth(dateMock);

  expect(decreasedDate.toISOString()).toEqual(expectedDate.toISOString());
});

test('should get the month difference between two dates', () => {
  const date1 = new Date(2021, 2, 1);
  const date2 = new Date(2023, 2, 1);

  expect(getMonthDiff(date1, date2)).toEqual(24);
});
