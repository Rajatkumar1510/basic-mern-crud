import { CHECKOUT, GET_ORDERS } from "../types";

const initialState = {
  orders: [],
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDERS:
      return { ...state, orders: action.payload };
    case CHECKOUT:
      return { ...state, orders: [action.payload, ...state.orders] };
    default:
      return state;
  }
};

export default orderReducer;
