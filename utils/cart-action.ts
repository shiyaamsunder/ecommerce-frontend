import { replaceCart } from '@redux/slices';
import { User, ProductWithAmount } from '@types';

export const fetchCartData = (user: User) => {
  return async (dispatch: any) => {
    const fetchData = async () => {
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

    try {
      const data: ProductWithAmount[] = await fetchData();
      const totalQuantity = data.reduce((acc, item) => acc + item.amount, 0);
      const totalPrice = data.reduce(
        (acc, item) => acc + item.price * item.amount,
        0
      );
      const newData = {
        totalQuantity,
        totalPrice,
        items: [...data],
      };
      dispatch(replaceCart(newData));
    } catch (error) {
      // eslint-disable-next-line
      console.log(error);
    }
  };
};

export const sendCartData = (cart: ProductWithAmount[], user: User) => {
  return async () => {
    const cartData = cart.map((item) => {
      return {
        amount: item.amount,
        product: item._id,
      };
    });

    const sendRequest = async () => {
      const response = await fetch(
        'https://morioh-backend.herokuapp.com/api/cart',
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${user?.accessToken}`,
            'x-refresh-token': user?.refreshToken!,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            cart: cartData || [],
          }),
        }
      );
      if (!response.ok) {
        throw new Error('Sending cart data failed.');
      }
    };

    try {
      await sendRequest();
    } catch (error) {
      console.log(error);
    }
  };
};
