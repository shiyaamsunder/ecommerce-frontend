import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

import { ProductLeft, ProductRight, ProductWrapper } from '@containers';
import { Product } from '@types';

function SingleProduct({ product }: { product: Product }) {
  return (
    <>
      <Head>
        <title>{product.title}</title>
        <meta name="title" content={product.title} />
        <meta name="description" content={product.description} />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://ecommerce-frontend-sigma.vercel.app/${product.category}/${product._id}`}
        />
        <meta property="og:title" content="Ecommerce Next JS" />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={product.image} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={`https://ecommerce-frontend-sigma.vercel.app/${product.category}/${product._id}`}
        />
        <meta property="twitter:title" content="Ecommerce Next JS" />
        <meta property="twitter:description" content={product.description} />
        <meta property="twitter:image" content={product.image} />
      </Head>
      <ProductWrapper>
        <ProductLeft title={product.title} image={product.image} />
        <ProductRight product={product} />
      </ProductWrapper>
    </>
  );
}

export default SingleProduct;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`https://morioh-backend.herokuapp.com/api/products`);

  const products: Product[] = await res.json();
  const paths = products.map((product) => ({
    params: { productId: product._id, category: product.category },
  }));

  return { paths, fallback: false };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://morioh-backend.herokuapp.com/api/products/${params?.productId}`
  );
  const product: Product = await res.json();

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product,
    },
  };
};
