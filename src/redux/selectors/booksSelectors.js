import { searchBooks } from "./../../App";
import { searchQuery } from "./filterSelectors";

export const checkBooksIsready = (state) => {
  return state.books.isReady;
}

export const filterBy = (state) => {
  return state.filter.filterBy;
}

const getBooks = (state) => {
  return state.books.items;
}

export const getAllBooks = (state) => {
  return checkBooksIsready(state) && searchBooks(getBooks(state), filterBy(state), searchQuery(state));
}

