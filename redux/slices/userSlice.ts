import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User } from '@types';

import type { RootState } from '../store';

const initialState: User = {
  tokens: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<typeof initialState>) => {
      state.tokens = action.payload.tokens;
    },
    logout: (state) => {
      state.tokens = null;
    },
  },
});

// Selectors
export const getUser = (state: RootState) => state.user;

// Reducers and actions
export const { setUser, logout } = userSlice.actions;

export default userSlice.reducer;
