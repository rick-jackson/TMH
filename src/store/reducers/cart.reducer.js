import { ADD_PRODUCT, REMOVE_PRODUCT } from "../actions/cart.actions";

const initialState = {
  cartData: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      const findProduct = state.cartData.find(
        (item) => item.id === action.payload.product.id
      );
      if (!findProduct) {
        return {
          ...state,
          cartData: [...state.cartData, action.payload.product],
        };
      }
      return {
        ...state,
        cartData: state.cartData.map((item) => {
          if (item.id === action.payload.product.id) {
            item.count++;
            return item;
          } else {
            return item;
          }
        }),
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
