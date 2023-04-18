import { createSlice } from '@reduxjs/toolkit';
import {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
} from './authOperation';

const initialState = {
  isAuth: null,
  token: null,
  user: { name: null, email: null },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: builder => {
    builder

      .addCase(registerUser.fulfilled, (state, { payload }) => {
        return {
          isAuth: true,
          token: payload.token,
          user: payload.user,
        };
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        return {
          isAuth: true,
          token: payload.token,
          user: payload.user,
        };
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        return {
          isAuth: true,
          user: action.payload,
          token:state.token
        };
      })
      .addCase(logoutUser.fulfilled, (state, { payload }) => {
        return {
          isAuth: false,
          token: null,
          user: { name: null, email: null },
        };
      })

      .addMatcher(
        action =>
          action.type.startsWith('auth') && action.type.endsWith('/panding'),
        (state, { payload }) => {
          state.isLoading = false;
        }
      )
      .addMatcher(
        action =>
          action.type.startsWith('auth') && action.type.endsWith('/rejected'),
        (state, { payload }) => {
          state.isLoading = false;
          //state.isAuth = false;
          state.error = payload;
        }
      );
  },
});
export default authSlice.reducer;
