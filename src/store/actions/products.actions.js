const baseUrl = `https://api.iev.aero/api/flights`;
export const PRODUCTS_DATA_RECIEVED = "PRODUCTS_DATA_RECIEVED";
export const SHOW_SPINNER = "SHOW_SPINNER";

export const showSpinner = () => {
  return {
    type: SHOW_SPINNER,
  };
};

export const productsDataRecieved = (productsData) => {
  return {
    type: PRODUCTS_DATA_RECIEVED,
    payload: {
      productsData,
    },
  };
};

export const fetchProductsData = () => {
  return fetch(`${baseUrl}`).then((response) => {
    if (response.ok) {
      return response.json();
    }
    return [];
  });
};

export const getProductsData = () => {
  return function (dispatch) {
    fetchProductsData().then((productsData) => {
      dispatch(productsDataRecieved(productsData));
    });
  };
};
