import { Footer } from '@components';
import { render, screen } from '@test-utils';

describe('Footer component', () => {
  it('Should render a footer component', () => {
    render(<Footer data-testid="footer" />);
    const footer = screen.getByText(/morioh/i);
    expect(footer).toBeInTheDocument();
  });
});
