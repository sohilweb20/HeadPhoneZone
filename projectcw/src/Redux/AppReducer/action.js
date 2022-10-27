import * as types from "./actionTypes";
import axios from "axios";
const getDataRequest = () => {
  return {
    type: types.GET_DATA_REQUEST,
  };
};
const getDataSuccess = (payload) => {
  return {
    type: types.GET_DATA_SUCCESS,
    payload,
  };
};
const getDataFailure = () => {
  return {
    type: types.GET_DATA_FAILURE,
  };
};

const getHeadData = (queryParams) => (dispatch) => {
  dispatch(getDataRequest());
  return axios
    .get(`https://rct-watch-app.herokuapp.com/watches`, queryParams)
    .then((res) => {
      dispatch(getDataSuccess(res.data));
    })
    .catch((err) => {
      dispatch(getDataFailure());
    });
};

export { getDataRequest, getDataSuccess, getDataFailure, getHeadData };
