import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import productsReducer from "./reducers/products.reducer";
import cartReducer from "./reducers/cart.reducer";

const reducer = combineReducers({
  products: productsReducer,
  cart: cartReducer
});

export const store = createStore(reducer, applyMiddleware(thunk));
