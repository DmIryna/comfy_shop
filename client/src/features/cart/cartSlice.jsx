import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  cart: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
}
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload)
      localStorage.setItem("cart", JSON.stringify(state.cart))
    },
    removeItem(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload)
      localStorage.setItem("cart", JSON.stringify(state.cart))
    },
    increaseQuantity(state, action) {
      const product = state.cart.find((item) => item.id === action.payload)
      product.quantity++
      product.totalPrice = product.quantity * product.price
      localStorage.setItem("cart", JSON.stringify(state.cart))
    },
    decreaseQuantity(state, action) {
      const product = state.cart.find((item) => item.id === action.payload)
      product.quantity--
      product.totalPrice = product.quantity * product.price

      if (product.quantity === 0)
        cartSlice.caseReducers.removeItem(state, action)
      localStorage.setItem("cart", JSON.stringify(state.cart))
    },
    clearCart(state) {
      state.cart = []
      localStorage.setItem("cart", JSON.stringify(state.cart))
    },
  },
})

export const {
  addItem,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0)

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0)

export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.id === id)?.quantity ?? 0

export default cartSlice.reducer
