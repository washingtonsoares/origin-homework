import { fireEvent, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { render } from 'test-utils';
import { KEY_CODES } from 'utils/keyboard';
import SavingGoal from '..';

beforeAll(() => {
  jest.useFakeTimers('modern');
  jest.setSystemTime(new Date(2021, 2, 1));
});

afterAll(() => {
  jest.useRealTimers();
});

test('should render default SavingGoal', () => {
  render(<SavingGoal />);

  const subTitle = screen.getByTestId('goal-subtitle');
  expect(subTitle.textContent).toEqual("Let's plan your saving goal.");
  expect(screen.getByTitle('Goal icon')).toBeInTheDocument();
  expect(screen.getByText('Buy a house')).toBeInTheDocument();
  expect(screen.getByText('Saving goal')).toBeInTheDocument();
  expect(screen.getByLabelText('Total amount')).toBeInTheDocument();
  expect(screen.getByText('Reach goal by')).toBeInTheDocument();
  expect(screen.getByText('April')).toBeInTheDocument();
  expect(screen.getByText('2021')).toBeInTheDocument();
  expect(screen.getByText('Monthly amount')).toBeInTheDocument();

  const monthlyDeposits = screen.getByTestId('monthly-deposits');
  expect(within(monthlyDeposits).getByText('$0')).toBeInTheDocument();

  const simulationDetails = screen.getByTestId('goal-simulation-details');
  expect(simulationDetails.textContent).toEqual(
    "You're planning 1 monthly deposits to reach your $0 goal by April 2021."
  );
});

test('should make a real world goal simulation', () => {
  const totalAmount = 25000;

  render(<SavingGoal />);

  const input = screen.getByLabelText('Total amount');
  userEvent.type(input, `${totalAmount}`);

  userEvent.tab();

  const monthPickerContainer = screen.getByTestId('month-picker');
  expect(monthPickerContainer).toHaveFocus();

  fireEvent.keyDown(monthPickerContainer, { code: KEY_CODES.ARROW_RIGHT });
  fireEvent.keyDown(monthPickerContainer, { code: KEY_CODES.ARROW_RIGHT });

  const monthlyDeposits = screen.getByTestId('monthly-deposits');
  const simulationDetails = screen.getByTestId('goal-simulation-details');
  expect(screen.getByText('June')).toBeInTheDocument();
  expect(screen.getByText('2021')).toBeInTheDocument();
  expect(within(monthlyDeposits).getByText('$8,334')).toBeInTheDocument();
  expect(simulationDetails.textContent).toEqual(
    "You're planning 3 monthly deposits to reach your $25,000 goal by June 2021."
  );

  fireEvent.keyDown(monthPickerContainer, { code: KEY_CODES.ARROW_LEFT });
  expect(within(monthlyDeposits).getByText('$12,500')).toBeInTheDocument();
  expect(simulationDetails.textContent).toEqual(
    "You're planning 2 monthly deposits to reach your $25,000 goal by May 2021."
  );
});
