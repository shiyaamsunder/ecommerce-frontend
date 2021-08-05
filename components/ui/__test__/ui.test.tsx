import { Grid, Box, Card } from '@components';
import { render, screen } from '@test-utils';

describe('Render UI based components- UI', () => {
  it('Should render a grid component', () => {
    render(<Grid>this is a grid</Grid>);
    const GridElement = screen.getByText(/this is a grid/i);
    expect(GridElement).toBeInTheDocument();
    expect(GridElement).toHaveStyle('display: grid;');
  });

  it('Should render a box component', () => {
    render(<Box pt="10px">this is a Box</Box>);
    const BoxElement = screen.getByText(/this is a box/i);
    expect(BoxElement).toBeInTheDocument();
    expect(BoxElement).toHaveStyle('padding-top: 10px;');
  });

  it('Should render a Card component', () => {
    render(
      <Card hoverPointer pt="10px">
        this is a Card
      </Card>
    );
    const CardElement = screen.getByText(/this is a card/i);
    expect(CardElement).toBeInTheDocument();
    expect(CardElement).toHaveStyle('cursor: pointer;');
  });
});
