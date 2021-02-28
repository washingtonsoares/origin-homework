import { screen } from '@testing-library/react';
import { render } from 'test-utils';
import userEvent from '@testing-library/user-event';
import CurrencyInput from '..';

test('should render CurrencyInput', () => {
  render(<CurrencyInput onChange={jest.fn()} />);

  expect(screen.getByTitle('Dollar sign icon')).toBeInTheDocument();
  expect(screen.getByRole('textbox')).toBeInTheDocument();
});

test('should render CurrencyInput and trigger onChange', () => {
  const onChangeFn = jest.fn();
  render(<CurrencyInput onChange={onChangeFn} />);

  userEvent.type(screen.getByRole('textbox'), '3500.44');

  expect(screen.getByDisplayValue('3,500.44')).toBeInTheDocument();
  expect(onChangeFn).toBeCalledWith(3500.44);
});
