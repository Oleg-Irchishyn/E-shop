import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import appReducer from "./reducers/appReducer";
import booksReducer from "./reducers/booksReducer";
import thunkMiddleware from "redux-thunk";
import logger from "redux-logger"
import cartReducer from "./reducers/cartReducer";
import filterReducer from "./reducers/filterReducer";


let reducers = combineReducers({
  app: appReducer,
  books: booksReducer,
  cart: cartReducer,
  filter: filterReducer
});

const middlewares = [thunkMiddleware, logger]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(...middlewares)));

window.__store__ = store;
export default store;