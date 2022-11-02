import { createStore, applyMiddleware } from "redux";
import reducer from "./redux/reducer";
//import auth from "./redux/auth";
//import { combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "@redux-devtools/extension";

//let middleware = [thunkMiddleware.withExtraArgument({ axios })];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware, createLogger()))
);

export default store;
