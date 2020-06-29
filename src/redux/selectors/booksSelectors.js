import orderBy from "lodash/orderBy";

const All = 'All';
const PRICE_HIGH = 'Price(high)';
const PRICE_LOW = 'Price(low)';
const AUTHOR = 'Author';
const DESC = 'desc';
const ASC = 'asc';
const PRICE = 'price';

const sortBy = (books, filterBy) => {
  switch (filterBy) {
    case All:
      return books;
    case PRICE_HIGH:
      return orderBy(books, PRICE, DESC)
    case PRICE_LOW:
      return orderBy(books, PRICE, ASC)
    case AUTHOR:
      return orderBy(books, AUTHOR, ASC)
    default:
      return books;
  }
}

export const getBooks = (state) => {
  return sortBy(state.books.items, state.books.filterBy);
}

export const checkBooksIsready = (state) => {
  return state.books.isReady;
}

export const filterBy = (state) => {
  return state.books.filterBy;
}