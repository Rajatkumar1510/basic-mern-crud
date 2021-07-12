import { ADD_TO_CART, DELETE_FROM_CART, GET_CART } from "../types";

const initialState = {
  cart: null,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CART:
      return {
        ...state,
        cart: action.payload,
      };
    case ADD_TO_CART:
      return {
        ...state,
        cart: action.payload,
      };
    case DELETE_FROM_CART:
      return {
        ...state,
        cart: action.payload,
      };

    default:
      return state;
  }
};

export default cartReducer;
