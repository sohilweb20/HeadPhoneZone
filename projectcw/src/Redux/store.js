import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { reducer as AppReducer } from "./AppReducer/reducer";
// import { reducer as AuthReducer } from "./AuthReducer/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({ AppReducer });

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export { store };
