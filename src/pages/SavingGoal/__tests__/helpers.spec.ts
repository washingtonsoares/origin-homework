import { getInitialDate, getMonthlyDeposits } from '../helpers';

beforeAll(() => {
  jest.useFakeTimers('modern');
  jest.setSystemTime(new Date(2021, 2, 1));
});

afterAll(() => {
  jest.useRealTimers();
});

test('check if getInitialDate returns current date plus one month', () => {
  const result = getInitialDate();

  const expectedDate = new Date(2021, 3, 1);
  expect(result).toEqual(expectedDate);
});

test('should return the monthly deposits and check the rounded value', () => {
  const totalAmount = 25000;
  const monthsAmount = 48;
  const monthlyDeposits = getMonthlyDeposits(totalAmount, monthsAmount);

  expect(monthlyDeposits).toBe(521);
});

test('should return the monthly deposits equal zero to avoid division by zero', () => {
  const totalAmount = 25000;
  const monthsAmount = 0;
  const monthlyDeposits = getMonthlyDeposits(totalAmount, monthsAmount);

  expect(monthlyDeposits).toBe(0);
});
