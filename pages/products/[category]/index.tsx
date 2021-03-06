import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { Grid, GoBackLink, NavBar } from '@components';
import { ProductCard } from '@containers';
import {
  CategoriesTop,
  CategoriesBottom,
  CategoriesWrapper,
} from '@styles/categories.styles';
import { Category, Product } from '@types';
import { capitalize } from '@utils/index';

function ProductsByCategories({ products }: { products: Product[] }) {
  const router = useRouter();
  const { category } = router.query;
  return (
    <>
      <NavBar />
      <CategoriesWrapper>
        <Head>
          <title>{capitalize(products[0].category)}</title>
          <meta name="title" content={products[0].category} />
        </Head>
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
    params: { category: category.category },
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
      products,
    },
  };
};
