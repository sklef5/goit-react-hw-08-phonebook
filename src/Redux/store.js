import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import Filterreducer from './Filter/filterSlice';
import ContactReducer from './Contacts/contactSlice';
import authReducer from './Auth/authSlice'
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "token",
  storage,
  whitelist: ["token"]
}

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    contacts: ContactReducer,
    filter: Filterreducer,
    auth: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
