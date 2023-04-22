import { booksSlice } from './booksReducer';

const { configureStore } = require('@reduxjs/toolkit');

export const store = configureStore({
  reducer: booksSlice.reducer,
});
