import { Grid } from '@components';
import { CategoryCard } from '@containers';
import { Category } from '@types';

import { ProductWrapper } from './styles';

export const ProductSection = ({ products }: { products: Category[] }) => {
  return (
    <ProductWrapper>
      <h1 id="#products" className="products__heading">
        Our Products
      </h1>

      <Grid
        gridTemplateColumns="repeat(auto-fit, minmax(280px, 1fr))"
        gridGap="50px"
      >
        {products.map((product) => (
          <CategoryCard
            category={product.category}
            image={product.image}
            key={product._id}
          />
        ))}
      </Grid>
    </ProductWrapper>
  );
};
