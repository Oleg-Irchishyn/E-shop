import { booksAPI } from "../../api/api";

const SET_IS_READY = 'e-shop/app/SET_IS_READY';
const SET_BOOKS = 'e-shop/app/SET_BOOKS';

let initialState = {
  isReady: false,
  items: null
}

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOKS:
      return {
        ...state,
        items: action.payload,
        isReady: true
      }
    case SET_IS_READY:
      return {
        ...state,
        isReady: action.payload

      }
    default:
      return state;
  }
}

export const setIsReady = (data) => ({
  type: SET_IS_READY,
  payload: data
})

export const setBooks = (books) => ({
  type: SET_BOOKS,
  payload: books
})

export const setBooksSuccess = (data) => {
  return async (dispatch) => {
    let data = await booksAPI.setBooks();
    dispatch(setBooks(data));
  }
}

export default booksReducer;