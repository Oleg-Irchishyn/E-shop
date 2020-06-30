const SET_FILTER = 'e-shop/app/SET_FILTER';
const SET_QUERY = 'e-shop/app/EARCH_QUERY';

let initialState = {
  searchQuery: '',
  filterBy: 'all'
}

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return {
        ...state,
        filterBy: action.payload
      }
    case SET_QUERY:
      return {
        ...state,
        searchQuery: action.payload
      }
    default:
      return state;
  }
}

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: filter
})

export const setSearchQuery = (query) => ({
  type: SET_QUERY,
  payload: query
})


export default filterReducer;