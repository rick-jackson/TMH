import {
  PRODUCTS_DATA_RECIEVED,
  SHOW_SPINNER,
} from "../actions/products.actions";

const initialState = {
  productsData: [],
  isFetching: true,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTS_DATA_RECIEVED: {
      return {
        ...state,
        productsData: action.payload.productsData,
        isFetching: false,
      };
    }
    case SHOW_SPINNER: {
      return {
        ...state,
        isFetching: true,
      };
    }

    default: {
      return state;
    }
  }
};

export default productsReducer;
