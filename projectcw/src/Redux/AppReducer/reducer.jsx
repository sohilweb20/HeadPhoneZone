import * as types from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  Data: [],
  cart: [],
  form: [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_DATA_SUCCESS:
      return {
        ...state,
        Data: payload,
        isLoading: false,
      };
    case types.GET_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        Data: [],
      };

    //cart

    case types.GET_CART_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.GET_CART_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        cart: payload,
      };
    case types.GET_CART_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        cart: [],
      };
    //form data

    case types.POST_FORM_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.POST_FORM_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        form: payload,
      };
    case types.POST_FORM_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: false,
        form: [],
      };

    case types.GET_FORM_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.GET_FORM_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        form: payload,
      };
    case types.GET_FORM_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: false,
        form: [],
      };

    default:
      return state;
  }
};
export { reducer };
