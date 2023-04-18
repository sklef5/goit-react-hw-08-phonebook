import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  registerUserApi,
  loginUserApi,
  logoutUserApi,
  getCurrentUserApi,
} from 'services/getApi';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const tokenAdd = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const tokenDel = () => {
  axios.defaults.headers.common.Authorization = ``;
};

export const registerUser = createAsyncThunk(
  'auth/register',
  async (credentials, thunkApi) => {
    try {
      const user = await registerUserApi(credentials);
      tokenAdd(user.token);
      return user;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const loginUser = createAsyncThunk(
  'auth/login',
  async (credentials, thunkApi) => {
    try {
      const user = await loginUserApi(credentials);
      tokenAdd(user.token);
      return user;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, thunkApi) => {
    try {
      await logoutUserApi();
      tokenDel();
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const getCurrentUser = createAsyncThunk(
  'auth/getCurrentUser',
  async (_, thunkApi) => {
    const currentToken = thunkApi.getState().auth.token;
    tokenAdd(currentToken);
    try {

      const data = await getCurrentUserApi();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, thunkApi) => {
      const currentToken = thunkApi.getState().auth.token;
      return Boolean(currentToken);
    },
  }
);
