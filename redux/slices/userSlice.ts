import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import { User } from '@types';

import type { RootState } from '../store';

const initialState: User = {
  accessToken: null,
  refreshToken: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<typeof initialState>) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      Object.assign(state, action);
    },
    logout: (state) => {
      state.accessToken = null;
      state.refreshToken = null;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.user,
      };
    },
  },
});

// Selectors
export const getUser = (state: RootState) => state.user;

// Reducers and actions
export const { setUser, logout } = userSlice.actions;

export default userSlice.reducer;
