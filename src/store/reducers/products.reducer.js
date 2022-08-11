import { PRODUCTS_DATA_RECIEVED } from "../actions/products.actions";
import { productData } from "../../utils/productsData";

const initialState = {
  productsData: productData,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTS_DATA_RECIEVED: {
      // state = {
      //   ...state,
      //   productsData: action.payload.productsData.body,
      //   isFetching: false,
      // };
      return state;
    }
    default: {
      return state;
    }
  }
};

export default productsReducer;
