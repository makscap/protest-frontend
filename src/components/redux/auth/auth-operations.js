import axios from 'axios';
import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';

import userErrorMessages from '../../Auth/AuthPage/Errors';

axios.defaults.baseURL = 'https://protest-api.herokuapp.com';

const token = {
  set(token) {
    // console.log('🚀 ~ file: auth-operations.js ~ line 11 ~ set ~ token', token);

    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/api/users/register', credentials);
    token.set(data.data.token);
    console.log(data.token);
    return data.data;
  } catch (error) {
    toast.error(userErrorMessages.ERROR_REGISTRATION);
    console.log('This is error registor', error);
    throw error;
  }
});

const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/api/users/login', credentials);
    token.set(data.data.token);
    return data.data;
  } catch (error) {
    toast.error(userErrorMessages.ERROR_LOGIN);
    console.log('This is login error', error);
    throw error();
  }
});

const googleIn = createAsyncThunk('auth/google', async credentials => {
  try {
    const { data } = await axios.post('/api/users/google', credentials);
    token.set(data.data.token);
    // console.log(data.data);
    return data.data;
  } catch (error) {
    toast.error(userErrorMessages.AUTH_FAILED);
    console.log('This is google error', error);
    throw error();
  }
});

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/api/users/logout');
    token.unset();
  } catch (error) {
    console.log(error);
  }
});

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      console.log('Токена нет, уходим из fetchCurrentUser');
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/api/users/current');
      console.log('CURRENT TOKEN', data);
      return data.data;
    } catch (error) {
      toast.info(userErrorMessages.CURRENT_USER_FAILED);
      throw error();
    }
  },
);

const operations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
  googleIn,
};
export default operations;
