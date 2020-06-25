const ADD_BOOKS = 'e-shop/app/ADD_BOOK';
const SET_BOOKS = 'e-shop/app/SET_BOOKS';

let initialState = {
  books: [{
    id: 0,
    title: 'Simple Book'
  }]
}

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOKS:
      return {
        ...state,
        books: action.payload
      }
    case ADD_BOOKS:
      return {
        ...state,
        books: [
          ...state.books,
          action.payload
        ]
      }
    default:
      return state;
  }
}

export const addBook = () => ({
  type: ADD_BOOKS
})

export const setBooks = (books) => ({
  type: SET_BOOKS,
  payload: books
})

export default booksReducer;