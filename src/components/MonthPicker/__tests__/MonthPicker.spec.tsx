import { fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { render } from 'test-utils';
import { KEY_CODES } from 'utils/keyboard';
import MonthPicker from '..';

beforeAll(() => {
  jest.useFakeTimers('modern');
  jest.setSystemTime(new Date(2021, 2, 1));
});

afterAll(() => {
  jest.useRealTimers();
});

test('should render MonthPicker', () => {
  const onChangeFn = jest.fn();
  const startDate = new Date(2021, 3, 1);

  render(<MonthPicker onChange={onChangeFn} startDate={startDate} />);

  expect(screen.getByText('Reach goal by')).toBeInTheDocument();
  expect(screen.getByTitle('Decrease month')).toBeInTheDocument();
  expect(screen.getByTitle('Increase month')).toBeInTheDocument();
  expect(screen.getByText('April')).toBeInTheDocument();
  expect(screen.getByText('2021')).toBeInTheDocument();
});

test('should check if previous button is disabled and do not trigger onChange by pressing ArrowLeft key', () => {
  const onChangeFn = jest.fn();
  const startDate = new Date(2021, 3, 1);

  render(<MonthPicker onChange={onChangeFn} startDate={startDate} />);
  const monthPickerContainer = screen.getByTestId('month-picker');
  fireEvent.keyDown(monthPickerContainer, { code: KEY_CODES.ARROW_LEFT });

  expect(screen.getByTitle('Decrease month')).toBeDisabled();
  expect(onChangeFn).not.toBeCalled();
});

test('should navigate to previous month by clicking', () => {
  const onChangeFn = jest.fn();
  const startDate = new Date(2021, 4, 1);

  render(<MonthPicker onChange={onChangeFn} startDate={startDate} />);

  const previousButton = screen.getByTitle('Decrease month');
  userEvent.click(previousButton);

  const callbackDate = onChangeFn.mock.calls[0][0];

  expect(callbackDate.getMonth()).toBe(startDate.getMonth() - 1);
});

test('should navigate to next month by clicking', () => {
  const onChangeFn = jest.fn();
  const startDate = new Date(2021, 4, 1);

  render(<MonthPicker onChange={onChangeFn} startDate={startDate} />);

  const nextButton = screen.getByTitle('Increase month');
  userEvent.click(nextButton);

  const callbackDate = onChangeFn.mock.calls[0][0];

  expect(callbackDate.getMonth()).toBe(startDate.getMonth() + 1);
});

test('should navigate to previous month by pressing ArrowLeft key', () => {
  const onChangeFn = jest.fn();
  const startDate = new Date(2021, 4, 1);

  render(<MonthPicker onChange={onChangeFn} startDate={startDate} />);

  const monthPickerContainer = screen.getByTestId('month-picker');
  fireEvent.keyDown(monthPickerContainer, { code: KEY_CODES.ARROW_LEFT });

  const callbackDate = onChangeFn.mock.calls[0][0];

  expect(callbackDate.getMonth()).toBe(startDate.getMonth() - 1);
});

test('should navigate to next month by pressing ArrowRight key', () => {
  const onChangeFn = jest.fn();
  const startDate = new Date(2021, 4, 1);

  render(<MonthPicker onChange={onChangeFn} startDate={startDate} />);

  const monthPickerContainer = screen.getByTestId('month-picker');
  fireEvent.keyDown(monthPickerContainer, { code: KEY_CODES.ARROW_RIGHT });

  const callbackDate = onChangeFn.mock.calls[0][0];

  expect(callbackDate.getMonth()).toBe(startDate.getMonth() + 1);
});
