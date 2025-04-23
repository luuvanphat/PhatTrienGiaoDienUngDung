// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';  // Counter cơ bản
import counterReducerAdvance from './counterSliceAdvance';  // Counter nâng cao
import todoReducer from './todoSlice';
import themeReducer from './themeSlice';
import cartReducer from './cartSlice';
import authReducer from './authSlice';
import usersReducer from './usersSlice';
import formReducer from './formSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,  // Cơ bản
    counterAd: counterReducerAdvance,  // Nâng cao
    todos: todoReducer,
    theme: themeReducer,
    cart: cartReducer,
    auth: authReducer,
    users: usersReducer,
    form: formReducer,
  },
});
