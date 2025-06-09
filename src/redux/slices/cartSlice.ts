import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { CartItem, MenuItem } from '../../components/context/initialState';

interface CartState {
  cart: CartItem[];
}

const initialCartState: CartState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addToCart: (state, action: PayloadAction<MenuItem>) => {
      const inCart = state.cart.find(item => item.id === action.payload.id);
      if (inCart) {
        state.cart = state.cart.map(item =>
          item.id === action.payload.id ? {...item, quantity: item.quantity + 1} : item
        );
      } else {
        state.cart.push({...action.payload, quantity: 1});
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter(item => item.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;