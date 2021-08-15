import { useEffect } from 'react';

import { InferGetServerSidePropsType, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { toast, Toaster } from 'react-hot-toast';

import { Box, Button, Card, Flex, GenericLink } from '@components';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import {
  deleteAllProduct,
  getCart,
  removeFromCart,
  replaceCart,
  getUser,
} from '@redux/slices';
import { wrapper } from '@redux/store';
import Wrapper from '@styles/cart.styles';
import { ProductWithAmount, User } from '@types';
import { fetchCartData, sendCartData } from '@utils/cart-action';

let initial = true;
const CartPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = () => {
  const cart = useAppSelector(getCart);
  const user = useAppSelector(getUser);
  const dispatch = useAppDispatch();
  const myToast = toast;

  useEffect(() => {
    if (!user.accessToken || !user.refreshToken) return;
    if (initial) {
      initial = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart.items, user));
    }
  }, [cart, dispatch, user]);
  useEffect(() => {
    if (!user.accessToken || !user.refreshToken) return;

    dispatch(fetchCartData(user));
  }, [user, dispatch]);

  const removeFromCartHandler = (id: string) => {
    dispatch(removeFromCart(id));
    myToast.success('Cart updated');
  };

  const deleteAllHandler = (id: string) => {
    dispatch(deleteAllProduct(id));
    myToast.success('Cart updated');
  };
  return (
    <>
      <Head>
        <title>My Cart</title>
        <meta name="title" content="Cart page for Ecommerce Page." />
        <meta name="description" content="Cart page for Ecommerce Page." />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://ecommerce-frontend-sigma.vercel.app/cart"
        />
      </Head>
      <Wrapper>
        <Toaster toastOptions={{ position: 'top-left' }} />
        <Flex alignItems="center" justifyContent="space-between">
          <h1>Cart</h1>

          <GenericLink href="/">Home</GenericLink>
        </Flex>
        {!user.accessToken && !user.refreshToken && (
          <h4>Please login to save your cart items</h4>
        )}

        <Flex justifyContent="flex-end">
          <h3>Grand Total: &#x20B9;{cart.totalPrice} </h3>
        </Flex>

        <Flex flexDirection="column">
          {cart.items.map((item) => (
            <Card key={item._id} mb="1rem" hoverPointer={false}>
              <Flex
                flexDirection={['column', null, 'row']}
                alignItems="center"
                justifyContent="space-between"
              >
                <Box width="140px" height="250px" position="relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    layout="fill"
                    objectFit="contain"
                  />
                </Box>

                <Flex
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="center"
                  width={['100%', null, '50%']}
                  marginTop={['1rem', null, '0']}
                >
                  <Flex
                    flexDirection="column"
                    justifyContent="center"
                    p={['0rem', '1rem']}
                    maxWidth="300px"
                  >
                    <h3>{item.title}</h3>
                    <h4>Price: &#x20B9;{item.price}</h4>
                    <h4>Quantity: {item.amount}</h4>
                  </Flex>

                  <Flex
                    flexDirection="column"
                    justifyContent="space-around"
                    height="150px"
                  >
                    <Button onClick={() => removeFromCartHandler(item._id)}>
                      Remove One
                    </Button>
                    <Button
                      onClick={() => deleteAllHandler(item._id)}
                      variant="outline"
                    >
                      Delete All
                    </Button>
                  </Flex>
                </Flex>
              </Flex>
            </Card>
          ))}
        </Flex>
      </Wrapper>
    </>
  );
};

export default CartPage;

const fetchData = async (user: User) => {
  const res = await fetch('https://morioh-backend.herokuapp.com/api/cart', {
    headers: {
      Authorization: `Bearer ${user?.accessToken}`,
      'x-refresh-token': user?.refreshToken!,
    },
  });
  if (!res.ok) {
    throw new Error();
  }
  return res.json();
};
export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    const { user } = store.getState();
    let newData;
    if (user.accessToken && user.refreshToken) {
      const data: ProductWithAmount[] = await fetchData(user);
      const totalQuantity = data.reduce((acc, item) => acc + item.amount, 0);
      const totalPrice = data.reduce(
        (acc, item) => acc + item.price * item.amount,
        0
      );
      newData = {
        totalQuantity,
        totalPrice,
        items: [...data],
      };
      await store.dispatch(replaceCart(newData));
    }

    return {
      props: {
        cart: newData || {
          totalQuantity: 0,
          totalPrice: 0,
          items: [],
          changed: false,
        },
      },
    };
  }
);
