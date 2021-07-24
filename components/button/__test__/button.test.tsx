import { render, screen } from '@test-utils';
import userEvent from '@testing-library/user-event';
import { Button, ButtonGroup } from '@components';

describe('Button Component- UI', () => {
  it('Should render a button with text', () => {
    render(<Button variant="solid">Shop Now</Button>);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveTextContent(/shop now/i);
  });

  it('Should render a solid button', () => {
    render(<Button variant="solid">Shop Now</Button>);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveStyle('background-color: #4E4E4E');
  });

  it('Should render a outline button', () => {
    render(<Button variant="outline">Shop Now</Button>);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveStyle('background-color: transparent');
  });
});

describe('Button Component - Functionality', () => {
  it('Should fire an click event', () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Test</Button>);
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);
    expect(onClick).toHaveBeenCalled();
  });
});

describe('Button Group', () => {
  it('Should render buttons with gap in between', () => {
    render(
      <ButtonGroup spacing="40px">
        <Button>One</Button>
        <Button>Two</Button>
      </ButtonGroup>
    );
    const buttonElement = screen.getByText('Two');
    expect(buttonElement).toHaveStyle('margin-left: 40px');
  });
});
