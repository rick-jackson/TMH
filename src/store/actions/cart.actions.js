export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const COUNTER_PLUS = "COUNTER_PLUS";
export const COUNTER_MINUS = "COUNTER_MINUS";

export const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: {
      product,
    },
  };
};

export const removeProduct = (id) => {
  return {
    type: REMOVE_PRODUCT,
    payload: {
      id,
    },
  };
};

export const counterMinus = (id) => {
  return {
    type: COUNTER_MINUS,
    payload: {
      id,
    },
  };
};
export const counterPlus = (id) => {
  return {
    type: COUNTER_PLUS,
    payload: {
      id,
    },
  };
};
