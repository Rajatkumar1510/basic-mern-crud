import axios from "axios";
import { ADD_TO_CART, DELETE_FROM_CART, GET_CART } from "../types";

export const getCart = (id) => (dispatch) => {
  const { data } = axios.get(`http://localhost:4000/api/cart/${id}`);
  dispatch({
    type: GET_CART,
    payload: data,
  });
};
export const addToCart = (id, productId, quantity) => (dispatch) => {
  const { data } = axios.post(`http://localhost:4000/api/cart/${id}`, {
    productId,
    quantity,
  });
  dispatch({
    type: ADD_TO_CART,
    payload: data,
  });
};
export const deleteFromCart = (userId, productId) => (dispatch) => {
  const { data } = axios.delete(
    `http://localhost:4000/api/cart/${userId}/${productId}`
  );
  dispatch({
    type: DELETE_FROM_CART,
    payload: data,
  });
};
