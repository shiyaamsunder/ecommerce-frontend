import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { Button, Grid, GoBackLink, NavBar } from '../../../components';
import { ProductCard } from '../../../containers/product-card';
import {
  CategoriesTop,
  CategoriesBottom,
  CategoriesWrapper
} from '../../../styles/categories.styles';
import { Category, Product } from '../../../types';

function ProductsByCategories({ products }: { products: Product[] }) {
  const router = useRouter();
  const { category } = router.query;
  return (
    <>
      <NavBar />
      <CategoriesWrapper>
        <GoBackLink />
        <CategoriesTop>
          <h1>{category}</h1>
        </CategoriesTop>

        <CategoriesBottom>
          <Grid
            gridTemplateColumns="repeat(auto-fit, minmax(280px, 1fr))"
            gridGap="50px"
          >
            {products.map((product) => (
              <ProductCard
                key={product._id}
                id={product._id}
                image={product.image}
                title={product.title}
                category={product.category}
              />
            ))}
          </Grid>
        </CategoriesBottom>
      </CategoriesWrapper>
    </>
  );
}

export default ProductsByCategories;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(
    `https://morioh-backend.herokuapp.com/api/products/categories`
  );

  const categories: Category[] = await res.json();
  const paths = categories.map((category) => ({
    params: { category: category.category }
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://morioh-backend.herokuapp.com/api/products/categories/${params?.category}`
  );
  const products: Product[] = await res.json();

  return {
    props: {
      products
    }
  };
};
