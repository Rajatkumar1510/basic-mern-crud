import axios from "axios";
import { CHECKOUT, GET_ORDERS } from "../types";

export const getOrders = (id) => (dispatch) => {
  const { data } = axios.get(`http://localhost:4000/api/order/${id}`);
  dispatch({
    type: GET_ORDERS,
    payload: data,
  });
};

export const checkout = (id, source) => (dispatch) => {
  const { data } = axios.post(`http://localhost:4000/api/cart/${id}`, {
    source,
  });
  dispatch({
    type: CHECKOUT,
    payload: data,
  });
};
