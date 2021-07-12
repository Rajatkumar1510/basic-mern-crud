import { combineReducers } from "redux";
import authReducer from "./authReducer";
import cartReducer from "./cartReducers";
import orderReducer from "./orderReducers";
import productReducer from "./productReducers";
const allReducers = combineReducers({
  product: productReducer,
  auth: authReducer,
  cart: cartReducer,
  order: orderReducer,
});
export default allReducers;
