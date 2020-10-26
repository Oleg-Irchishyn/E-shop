import { createSelector } from "reselect";
import uniqBy from 'lodash/uniqBy';

export const cartItems = (state) => {
  return uniqBy(state.cart.items, o => o.id)
}

export const cartItemsLength = (state) => {
  return parseInt(cartItems(state).length);
}

export const totalPriceLength = (state) => {
 return state.cart.items;
}

export const totalItemsPrice = createSelector(
  totalPriceLength, (items) => {
    return items.reduce((total, book) => total + book.price, 0);
  }
)
