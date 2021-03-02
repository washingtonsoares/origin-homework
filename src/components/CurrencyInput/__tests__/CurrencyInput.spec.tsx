import { screen } from '@testing-library/react';
import { render } from 'test-utils';
import userEvent from '@testing-library/user-event';
import CurrencyInput from '..';

test('should render CurrencyInput', () => {
  render(<CurrencyInput onChange={jest.fn()} />);

  expect(screen.getByTitle('Dollar sign icon')).toBeInTheDocument();
  expect(screen.getByLabelText('Total amount')).toBeInTheDocument();
});

test('should render CurrencyInput and trigger onChange', () => {
  const onChangeFn = jest.fn();
  render(<CurrencyInput onChange={onChangeFn} />);

  const input = screen.getByLabelText('Total amount');

  userEvent.type(input, '3500.44');
  expect(screen.getByDisplayValue('3,500.44')).toBeInTheDocument();
  expect(onChangeFn).toBeCalledWith(3500.44);

  userEvent.clear(input);
  expect(screen.getByDisplayValue('')).toBeInTheDocument();
  expect(onChangeFn).toBeCalledWith(undefined);
});
