import axios from "axios";
import {
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOADED,
  USER_LOADING,
} from "../types";

export const loadUser = () => async (dispatch) => {
  // user Loading
  dispatch({ type: USER_LOADING });
  
  const { data } = await axios.get("http://localhost:4000/api/user");
  dispatch({
    type: USER_LOADED,
    payload: data,
  });
};

export const registerUser = (registerFormData) => async (dispatch) => {
  const { data } = await axios.post(
    "http://localhost:4000/api/register",
    registerFormData
  );
  dispatch({
    type: REGISTER_SUCCESS,
    payload: data,
  });
};
export const loginUser = (loginFormData) => async (dispatch) => {
  const { data } = await axios.post(
    "http://localhost:4000/api/login",
    loginFormData
  );
  dispatch({
    type: LOGIN_SUCCESS,
    payload: data,
  });
};
export const logout = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};
