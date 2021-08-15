import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  nextReduxCookieMiddleware,
  wrapMakeStore,
} from 'next-redux-cookie-wrapper';
import { createWrapper } from 'next-redux-wrapper';

import cartReducer from './slices/cartSlice';
import userReducer from './slices/userSlice';

const reducers = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

const makeStore = wrapMakeStore(() =>
  configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().prepend(
        nextReduxCookieMiddleware({
          secure: process.env.NODE_ENV !== 'development',
          subtrees: [`user`],
          maxAge: 60 * 60,
          sameSite: 'strict',
          path: '/',
        })
      ),
  })
);

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export const wrapper = createWrapper<AppStore>(makeStore);
