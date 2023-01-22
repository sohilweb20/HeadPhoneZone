import * as types from "./actionTypes";
import axios from "axios";

const LoginRequest = (payload) => (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });

  return axios({
    method: "POST",
    url: "/login",
    baseURL: "https://inquisitive-wetsuit-ray.cyclic.app",
    data: payload,
  })
    .then((res) => dispatch({ type: types.LOGIN_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: types.LOGIN_FAILURE, payload: err }));
};

const LogoutUser = (payload) => (dispatch) => {
  dispatch({ type: types.LOGOUT_REQUEST });
  dispatch({ type: types.LOGOUT_SUCCESS });
};

export { LoginRequest, LogoutUser };
