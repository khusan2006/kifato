import { createSlice } from '@reduxjs/toolkit';

type CartType = {
    cart:  {
        productId: string;
        name: string;
        quantity: number;
        totalPrice: number;
        unitPrice: number;
        image: string;
    }[]
}
const initialState: CartType = {
  cart: [],

  // cart: [
  //   {
  //     productId: 12,
  //     name: 'Mediterranean',
  //     quantity: 2,
  //     unitPrice: 16,
  //     totalPrice: 32,
  //   },
  // ],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      // payload = newItem
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      // payload = productId
      state.cart = state.cart.filter((item) => item.productId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      // payload = productId
      const item = state.cart.find((item) => item.productId === action.payload);
      if(!item) return

      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      // payload = productId
      const item = state.cart.find((item) => item.productId === action.payload);
      if(!item) return

      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;

      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state: {cart: CartType}) => state.cart.cart;

export const getTotalCartQuantity = (state: {cart: CartType}) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state: {cart: CartType}) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

export const getCurrentQuantityById = (id:string) => (state: {cart: CartType}) =>
  state.cart.cart.find((item) => item.productId === id)?.quantity ?? 0;