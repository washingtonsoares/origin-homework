import { screen, within } from '@testing-library/react';
import { render } from 'test-utils';
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
  /** this is a workaround since RTL doesn't have a simple way to query
   all text content from an element which contains html tags ***/
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
