
const REMOVE_BOOK_FROM_CART = 'e-shop/app/REMOVE_BOOK_FROM_CART';
const ADD_BOOK_TO_CART = 'e-shop/app/ADD_BOOK_TO_CART';

let initialState = {
  items: JSON.parse(localStorage.getItem('cartItems')) || [],
  addedCount: 0
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK_TO_CART:
      return {
        ...state,
        items: [
          ...state.items,
          action.payload
        ]
      }
    case REMOVE_BOOK_FROM_CART:
      return {
        ...state,
        items: state.items.filter(i => i.id !== action.payload)

      }
    default:
      return state;
  }
}

export const addBookToCart = (obj) => ({
  type: ADD_BOOK_TO_CART,
  payload: obj
})

export const removeBookFromCart = (id) => ({
  type: REMOVE_BOOK_FROM_CART,
  payload: id
})


export default cartReducer;