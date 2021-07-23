import { GetStaticProps } from 'next';
import { Grid } from '../../components';
import { ProductCard } from '../../containers/product-card';
import { Product } from '../../types';

function AllProducts({ products }: { products: Product[] }) {
  return (
    <div style={{ width: '90%', margin: 'auto', padding: '100px' }}>
      <Grid
        gridTemplateColumns="repeat(auto-fit, minmax(280px, 1fr))"
        gridGap="50px"
      >
        {products.map((product) => (
          <ProductCard
            key={product._id}
            id={product._id}
            category={product.category}
            title={product.title}
            image={product.image}
          />
        ))}
      </Grid>
    </div>
  );
}

export default AllProducts;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://morioh-backend.herokuapp.com/api/products');
  const products = await res.json();

  return {
    props: {
      products
    }
  };
};
