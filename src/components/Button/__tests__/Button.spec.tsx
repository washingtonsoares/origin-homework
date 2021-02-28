import { screen } from '@testing-library/react';
import { render } from 'test-utils';
import Button from '..';

test('should render Button', () => {
  render(<Button>text</Button>);

  expect(screen.getByRole('button', { name: /text/ })).toBeInTheDocument();
});
