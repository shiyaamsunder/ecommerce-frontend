import { NavBar } from '@components';
import { render, screen } from '@test-utils';

describe('Navbar component - UI', () => {
  it('Should render an NavBar component', () => {
    render(<NavBar />);
    const navElement = screen.getByRole('navigation');
    expect(navElement).toBeInTheDocument();
    expect(navElement).toHaveTextContent(/morioh/i);
  });
  it('Should call the logout function', () => {
    render(<NavBar />);
    const logoutButton = screen.queryByTestId('logoutButton');
    expect(logoutButton).not.toBeInTheDocument();
  });
});
