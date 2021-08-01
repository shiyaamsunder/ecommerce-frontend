import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../store';

interface requestState {
  status: 'pending' | 'success' | 'error' | 'idle';
  message: string;
  error: boolean;
}

const initialState: requestState = {
  status: 'idle',
  message: '',
  error: false,
};

export const requestStateSlice = createSlice({
  name: 'requestState',
  initialState,
  reducers: {
    setRequestState: (state, action: PayloadAction<requestState>) => {
      state.error = action.payload.error;
      state.message = action.payload.message;
      state.status = action.payload.status;
    },
  },
});

export const getRequestState = (state: RootState) => state.requestState;

export const { setRequestState } = requestStateSlice.actions;

export default requestStateSlice.reducer;
