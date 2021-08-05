import { singleProductMock } from '@fixtures';
import { screen, render } from '@test-utils';

import { ProductCard } from '../product-card';

jest.mock('next/image', () => {
  return () => <></>;
});

describe('Product Card.', () => {
  it('Should render a Card Component with a image and title', () => {
    render(
      <ProductCard
        image={singleProductMock.image}
        category={singleProductMock.category}
        title={singleProductMock.title}
        id={singleProductMock._id}
      />
    );

    const ProductCardElement = screen.queryByRole('link');

    expect(ProductCardElement).toBeInTheDocument();
    expect(ProductCardElement).toHaveTextContent(singleProductMock.title);
  });
});
