import { shouldDisablePreviousMonth } from '../helpers';

beforeAll(() => {
  jest.useFakeTimers('modern');
  jest.setSystemTime(new Date(2021, 2, 1));
});

afterAll(() => {
  jest.useRealTimers();
});

test('should disable previous month', () => {
  const selectedDate = new Date(2021, 3, 1);
  const result = shouldDisablePreviousMonth(selectedDate);

  expect(result).toBeTruthy();
});

test('should not disable previous month', () => {
  const selectedDate = new Date(2021, 4, 1);
  const result = shouldDisablePreviousMonth(selectedDate);

  expect(result).toBeFalsy();
});
