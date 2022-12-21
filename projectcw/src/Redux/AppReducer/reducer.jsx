import * as types from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  Data: [],
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
    default:
      return state;
  }
};
export { reducer };
