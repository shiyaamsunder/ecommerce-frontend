import React, { useState } from 'react';

import Image from 'next/image';
import toast, { Toaster } from 'react-hot-toast';

import {
  AddIcon,
  Box,
  Button,
  CartIcon,
  GenericLink,
  GoBackLink,
  MinusIcon,
} from '@components';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { addToCart, getCart } from '@redux/slices';
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

export const ProductRight = ({ product }: { product: Product }) => {
  const [amount, setAmount] = useState(1);
  const dispatch = useAppDispatch();
  const cart = useAppSelector(getCart);

  const increment = () => {
    if (amount >= 10) return;
    setAmount((prev) => prev + 1);
  };
  const decrement = () => {
    if (amount < 0) return;
    setAmount((prev) => prev - 1);
  };

  const addToCartHandler = () => {
    const item = {
      amount,
      ...product,
    };
    dispatch(addToCart(item));
    toast.success('Added to cart', {
      position: 'top-left',
    });
    setAmount(1);
  };
  return (
    <Right>
      <Top>
        <GoBackLink />
        <Toaster />
        <GenericLink href="/cart" passHref>
          <CartIcon />
          <span className="totalAmount">{cart.totalQuantity}</span>
        </GenericLink>
      </Top>
      <Details>
        <h1>{product.title}</h1>

        <p>{product.description}</p>

        <Middle>
          <div className="amount">
            <button
              onClick={decrement}
              type="button"
              className="amount__button"
            >
              <MinusIcon />
            </button>
            <div className="amount__input">{amount}</div>
            <button
              onClick={increment}
              type="button"
              className="amount__button"
            >
              <AddIcon />
            </button>
          </div>

          <span className="price">&#x20B9;{product.price}</span>
        </Middle>

        <Bottom>
          <Button onClick={addToCartHandler} variant="solid">
            Add to Cart
          </Button>

          {/* eslint-disable-next-line */}
          <Button onClick={() => alert('Working on that!! 😀')}>
            Save for Later
          </Button>
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
