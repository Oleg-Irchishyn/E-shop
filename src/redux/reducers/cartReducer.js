
const REMOVE_BOOK_FROM_CART = 'e-shop/app/REMOVE_BOOK_FROM_CART';
const ADD_BOOK_TO_CART = 'e-shop/app/ADD_BOOK_TO_CART';

let initialState = {
  items: [{
    "id": 0,
    "title": "Происхождение",
    "author": "Дэн Браун",
    "image": "https://cv9.litres.ru/pub/c/elektronnaya-kniga/cover_415/27624091-den-braun-proishozhdenie-27624091.jpg",
    "price": 710,
    "rating": 3
  },
  {
    "id": 1,
    "title": "1984",
    "author": "Джордж Оруэлл",
    "image": "https://cv0.litres.ru/sbc/09233908_cover_185-elektronnaya-kniga--.jpg",
    "price": 415,
    "rating": 5
  },
  {
    "id": 2,
    "title": "Девушка в тумане",
    "author": "Донато Карризи",
    "image": "https://cv2.litres.ru/sbc/31635724_cover_185-elektronnaya-kniga-donato-karrizi-devushka-v-tumane.jpg",
    "price": 464,
    "rating": 4
  }]
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

export const setIsReady = (data) => ({
  type: REMOVE_BOOK_FROM_CART,
  payload: data
})

export const addBooksToCart = (books) => ({
  type: ADD_BOOK_TO_CART,
  payload: books
})

export default cartReducer;