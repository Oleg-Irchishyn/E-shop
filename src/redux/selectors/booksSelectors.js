import { searchBooks } from "./../../App";

export const getBooks = (state) => {
  return state.books.items && searchBooks(state.books.items, state.filter.filterBy, state.filter.searchQuery);
}

export const checkBooksIsready = (state) => {
  return state.books.isReady;
}

export const filterBy = (state) => {
  return state.filter.filterBy;
}