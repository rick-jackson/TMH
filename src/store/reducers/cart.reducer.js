import { ADD_PRODUCT, REMOVE_PRODUCT } from "../actions/cart.actions";

const initialState = {
  cartData: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      return {
        ...state,
        cartData: [...state.cartData, action.payload.product],
      };
    }

    case REMOVE_PRODUCT: {
      return {
        ...state,
        cartData: state.cartData.filter((el) => el.id !== action.payload.id),
      };
    }

    default: {
      return state;
    }
  }
};

export default cartReducer;
