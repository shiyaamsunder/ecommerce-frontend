import { Input } from '@components';
import { render, screen } from '@test-utils';

describe('Input component - UI', () => {
  it('Should render an Input component', () => {
    render(<Input data-testid="input" />);
    const inputElement = screen.getByTestId('input');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveStyle('font-family: inherit');
  });
});
