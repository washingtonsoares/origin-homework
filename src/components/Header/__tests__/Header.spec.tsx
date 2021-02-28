import { screen } from '@testing-library/react';
import { render } from 'test-utils';
import Header from '..';

test('should render Header', () => {
  render(<Header />);

  expect(screen.getByTitle(/Origin's logo/)).toBeInTheDocument();
});
