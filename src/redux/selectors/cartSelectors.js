import { createSelector } from "reselect";

const cartItems = (state) => {
  return state.cart.items
}

export const totalItemsPrice = createSelector(
  cartItems, (items) => {
    return items.reduce((total, book) => total + book.price, 0);
  }
)