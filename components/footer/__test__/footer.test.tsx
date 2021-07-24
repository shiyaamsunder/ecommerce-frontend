import { render, screen } from '@test-utils';
import { Footer } from '@components';

describe('Footer component', () => {
  it('Should render a footer component', () => {
    render(<Footer data-testid="footer" />);
    const footer = screen.getByText(/morioh/i);
    expect(footer).toBeInTheDocument();
  });
});
