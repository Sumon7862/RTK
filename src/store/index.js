import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "../features/cartSlice"
import { productsApi } from './api'
import { categoryApi } from './categoryApi'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
  },
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
   .concat(productsApi.middleware)
   .concat(categoryApi.middleware),
})