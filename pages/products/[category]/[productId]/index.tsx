import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import {
  Box,
  Button,
  CartIcon,
  Flex,
  GoBackLink
} from '../../../../components';
import { Product } from '../../../../types';
import {
  Middle,
  Details,
  Left,
  Right,
  Wrapper,
  Top,
  Bottom
} from '../../../../styles/product.styles';

function SingleProduct({ product }: { product: Product }) {
  return (
    <Wrapper>
      <Left>
        <Box
          width="400px"
          height={['250px', '300px', '500px']}
          position="relative"
        >
          <Image
            layout="fill"
            objectFit="contain"
            src={product.image}
            alt={product.title}
          />
        </Box>
      </Left>

      <Right>
        <Top>
          <GoBackLink />

          <CartIcon />
        </Top>
        <Details>
          <h1>{product.title}</h1>

          <p>{product.description}</p>

          <Middle>
            <div>-00+</div>

            <span className="price">&#x20B9;{product.price}</span>
          </Middle>

          <Bottom>
            <Button variant="solid">Add to Cart</Button>

            <Button>Save for Later</Button>
          </Bottom>
        </Details>
      </Right>
    </Wrapper>
  );
}

export default SingleProduct;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`https://morioh-backend.herokuapp.com/api/products`);

  const products: Product[] = await res.json();
  const paths = products.map((product) => ({
    params: { productId: product._id, category: product.category }
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
      notFound: true
    };
  }

  return {
    props: {
      product
    }
  };
};
