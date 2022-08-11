import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import productsReducer from "./reducers/products.reducer";

const reducer = combineReducers({
  products: productsReducer,
});

export const store = createStore(reducer, applyMiddleware(thunk));
