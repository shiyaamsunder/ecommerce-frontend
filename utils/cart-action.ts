import { replaceCart, setRequestState } from '@redux/slices';
import { User, ProductWithAmount } from '@types';

export const fetchCartData = (user: User) => {
  return async (dispatch: any) => {
    const fetchData = async () => {
      const res = await fetch('https://morioh-backend.herokuapp.com/api/cart', {
        headers: {
          Authorization: `Bearer ${user.tokens?.accessToken}`,
          'x-refresh-token': user.tokens?.refreshToken!,
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
  return async (dispatch: any) => {
    dispatch(
      setRequestState({
        error: false,
        message: 'Sending cart data',
        status: 'pending',
      })
    );

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
            Authorization: `Bearer ${user.tokens?.accessToken}`,
            'x-refresh-token': user.tokens?.refreshToken!,
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
      dispatch(
        setRequestState({
          error: false,
          message: 'Sent cart data',
          status: 'success',
        })
      );
    } catch (error) {
      dispatch(
        setRequestState({
          error: true,
          message: error.message,
          status: 'error',
        })
      );
    }
  };
};
