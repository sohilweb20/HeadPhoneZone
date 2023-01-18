import * as types from "./actionTypes";
import axios from "axios";

const getData = (dispatch) => {
  dispatch({ type: types.GET_DATA_REQUEST });
  return axios
    .get("https://long-gray-pigeon-wig.cyclic.app/leads")
    .then((res) =>
      dispatch({ type: types.GET_DATA_SUCCESS, payload: res.data })
    )
    .catch((err) => dispatch({ type: types.GET_DATA_FAILURE, payload: err }));
};

const POST_DATA_REQUEST = () => ({
  type: types.POST_DATA_REQUEST,
});
const POST_DATA_SUCCESS = () => ({
  type: types.POST_DATA_SUCCESS,
});
const POST_DATA_FAILURE = () => ({
  type: types.POST_DATA_FAILURE,
});

const AddToCart = (payload) => (dispatch) => {
  dispatch(POST_DATA_REQUEST());
  axios({
    method: "post",
    baseURL: "https://emptyapi.onrender.com/",
    url: "/cart",
    data: payload,
  })
    .then(() => POST_DATA_SUCCESS())
    .catch(() => POST_DATA_FAILURE());
};

const getcartdata = (dispatch) => {
  dispatch({ type: types.GET_CART_DATA_REQUEST });
  return axios
    .get("https://emptyapi.onrender.com/cart")
    .then((res) =>
      dispatch({ type: types.GET_CART_DATA_SUCCESS, payload: res.data })
    )
    .catch((err) =>
      dispatch({ type: types.GET_CART_DATA_FAILURE, payload: err })
    );
};

const filter_data = (data) => ({
  type: types.FILTER_DATA,
  payload: data,
});

export { getData, AddToCart, getcartdata, filter_data };
