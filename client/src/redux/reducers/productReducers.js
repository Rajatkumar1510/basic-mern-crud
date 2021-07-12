import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  GET_PRODUCTS,
  UPDATE_PRODUCT,
} from "../types";

const initialState = {
  products: [],
};
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        // ...state.products check it
        products: [action.payload, ...state.products],
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product._id === action.payload
        ),
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        products: state.products.map((product) => {
          if (product._id === action.payload.id) {
            product = action.payload.data;
          }
        }),
      };
    default:
      return state;
  }
};
export default productReducer;
