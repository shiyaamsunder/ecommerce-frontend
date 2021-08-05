import { singleProductMock } from '@fixtures';
import { screen, render } from '@test-utils';

import { CategoryCard } from '../category-card';

jest.mock('next/image', () => {
  return () => <></>;
});

describe('Category Card.', () => {
  it('Should render a Card Component with a image and category', () => {
    render(
      <CategoryCard
        image={singleProductMock.image}
        category={singleProductMock.category}
      />
    );

    const categoryCardElement = screen.queryByRole('link');

    expect(categoryCardElement).toBeInTheDocument();
    expect(categoryCardElement).toHaveTextContent(/smartphone/i);
  });
});
