
export const getBooks = (state) => {
  return state.books.items;
}

export const checkBooksIsready = (state) => {
  return state.books.isReady;
}

export const filterBy = (state) => {
  return state.books.filterBy;
}