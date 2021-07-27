import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import {
  AddIcon,
  Box,
  Button,
  CartIcon,
  GoBackLink,
  MinusIcon,
} from '@components';
import {
  Middle,
  Details,
  Left,
  Right,
  Wrapper,
  Top,
  Bottom,
} from '@styles/product.styles';
import { Product } from '@types';

export const ProductLeft = ({
  image,
  title,
}: Pick<Product, 'image' | 'title'>) => {
  return (
    <Left>
      <Box
        width="400px"
        height={['250px', '300px', '500px']}
        position="relative"
      >
        <Image layout="fill" objectFit="contain" src={image} alt={title} />
      </Box>
    </Left>
  );
};

export const ProductRight = ({
  title,
  description,
  price,
}: Omit<Product, 'image' | 'category' | '_id'>) => {
  return (
    <Right>
      <Top>
        <GoBackLink />

        <Link href="/cart" passHref>
          <a href="cart">
            <CartIcon />
          </a>
        </Link>
      </Top>
      <Details>
        <h1>{title}</h1>

        <p>{description}</p>

        <Middle>
          <div className="amount">
            <button type="button" className="amount__button">
              <MinusIcon />
            </button>
            <div className="amount__input">00</div>
            <button type="button" className="amount__button">
              <AddIcon />
            </button>
          </div>

          <span className="price">&#x20B9;{price}</span>
        </Middle>

        <Bottom>
          <Button variant="solid">Add to Cart</Button>

          <Button>Save for Later</Button>
        </Bottom>
      </Details>
    </Right>
  );
};

export const ProductWrapper: React.FunctionComponent = ({
  children,
  ...rest
}) => {
  return <Wrapper {...rest}>{children}</Wrapper>;
};
