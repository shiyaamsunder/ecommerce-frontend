import { GenericLink } from '@components';
import { render, screen } from '@test-utils';

describe('Generic Link component - UI', () => {
  it('Should render an Link component with an <a> tag', () => {
    render(<GenericLink href="/testlink">This is a link</GenericLink>);
    const genericLink = screen.getByRole('link');
    expect(genericLink).toBeInTheDocument();
    expect(genericLink).toHaveAttribute('href', '/testlink');
  });

  // TODO test go back link
});
