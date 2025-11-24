import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: [],
}



export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload)
      // state.cart = [...state.cart, action.payload]
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart} = cartSlice.actions

export default cartSlice.reducer