import { GetStaticPaths, GetStaticProps } from 'next';

import { ProductLeft, ProductRight, ProductWrapper } from '@containers';
import { Product } from '@types';

function SingleProduct({ product }: { product: Product }) {
  return (
    <ProductWrapper>
      <ProductLeft title={product.title} image={product.image} />
      <ProductRight
        title={product.title}
        description={product.description}
        price={product.price}
      />
    </ProductWrapper>
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
