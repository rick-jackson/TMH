import { PRODUCTS_DATA_RECIEVED } from "../actions/products.actions";

const initialState = {
  productsData: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTS_DATA_RECIEVED: {

      return { ...state, productsData: action.payload.productsData };
    }
    default: {
      return state;
    }
  }
};

export default productsReducer;
