import axios from "axios";
import {
  GET_PRODUCTS,
  GET_PRODUCT,
  ADD_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
} from "../types";
export const getProducts = () => async (dispatch) => {
  const { data } = await axios.get("http://localhost:4000/api/products");
  dispatch({
    type: GET_PRODUCTS,
    payload: data,
  });
};
// export const getProduct = () => async (dispatch) => {
//   const { data } = await axios.get("http://localhost:4000/api/products");
//   dispatch({
//     type: GET_PRODUCT,
//     payload: data,
//   });
// };
export const addProduct = (productFormData) => async (dispatch) => {
  const { data } = await axios.post(
    "http://localhost:4000/api/products",
    productFormData
  );
  dispatch({
    type: ADD_PRODUCT,
    payload: data,
  });
};
export const updateProduct = (id, updatedProduct) => async (dispatch) => {
  const { data } = await axios.put(
    `http://localhost:4000/api/products/${id}`,
    updatedProduct
  );
  dispatch({
    type: UPDATE_PRODUCT,
    payload: data,
  });
};
export const deleteProduct = (id) => async (dispatch) => {
  const { data } = await axios.get(`http://localhost:4000/api/products/${id}`);
  dispatch({
    type: DELETE_PRODUCT,
    payload: data,
  });
};
