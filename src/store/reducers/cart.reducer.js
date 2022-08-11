import { ADD_PRODUCT } from "../actions/cart.actions";

const initialState = {
  cartData: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      console.log(action.payload);
      state.cartData.push(action.payload.product);
      return state;
    }
    default: {
      return state;
    }
  }
};

export default cartReducer;
