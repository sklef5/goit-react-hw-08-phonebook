import { createAsyncThunk } from "@reduxjs/toolkit";
import { registerUserApi, loginUserApi, logoutUserApi, getCurrentUserApi} from "services/getApi";

export const registerUser = createAsyncThunk(
    'auth/register',
    async (credentials, thunkApi) => {
      try {
        const user = await registerUserApi(credentials);
        return user;
      } catch (error) {
        return thunkApi.rejectWithValue(error.message);
      }
    }
)
export const loginUser = createAsyncThunk(
  'auth/login',
  async (credentials, thunkApi) => {
    try {
      const user = await loginUserApi(credentials);
      return user;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
)

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, thunkApi) => {
    try {
      const user = await logoutUserApi();
      return user
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
)

export const getCurrentUser = createAsyncThunk(
  'auth/getCurrentUser',
  async (_, thunkApi) => {
    const {token} = thunkApi.getState().auth;
    console.log('token resp', token)
    try {
      const user = await getCurrentUserApi();
      console.log(user)
      return user;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }  
  }


  //   {
  //   condition: (_, { getState }) => {
  //     const {token} = getState().auth;
  //     console.log('token cond', token)
  //     if (token) return true;
  //     return false;
  //   },
  // }
)