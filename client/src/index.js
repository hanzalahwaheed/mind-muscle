import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import auhtReducer from "./state"
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
// these imports are for persist only
import {
  persistReducer,
  persistStore,
  FLUSH,
  PAUSE,
  PURGE,
  REHYDRATE,
  REGISTER,
  PERSIST
} from 'redux-persist';
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";
import { getDefaultNormalizer } from '@testing-library/react';

const persistConfig = { key: "root", storage, version: 1 }

const persistedReducer = persistReducer(persistConfig, auhtReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, PAUSE, PURGE, REHYDRATE, REGISTER, PERSIST],
      },
    });
  }
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStore(store)}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);


