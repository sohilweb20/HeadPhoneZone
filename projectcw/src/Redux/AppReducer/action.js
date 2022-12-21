import * as types from "./actionTypes";
import axios from "axios";

const getData = (dispatch) => {
  dispatch({ type: types.GET_DATA_REQUEST });
  return axios
    .get(" ")
    .then((res) =>
      dispatch({ type: types.GET_DATA_SUCCESS, payload: res.data })
    )
    .catch((err) => dispatch({ type: types.GET_DATA_FAILURE, payload: err }));
};

export { getData };
