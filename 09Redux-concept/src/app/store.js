//! this is first step for redux here we configure store
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../featuresSlice/todo/todoSlice';

export const store = configureStore({
  reducer: todoReducer,
}); //* make a name of store (here it is store) and export it and make key of reducer to pass the reducer logic
