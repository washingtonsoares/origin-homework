import { formatCurrency } from 'utils/currency';

test('should format currency', () => {
  expect(formatCurrency(0)).toEqual('$0');
  expect(formatCurrency(100)).toEqual('$100');
  expect(formatCurrency(100000.44)).toEqual('$100,000.44');
});
