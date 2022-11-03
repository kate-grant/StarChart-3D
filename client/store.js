import { createStore, applyMiddleware } from "redux";
import reducer from "./redux/reducer.js";
import starReducer from "./redux/starReducer.js";
//import auth from "./redux/auth";
//import { combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "@redux-devtools/extension";
import axios from "axios";

let middleware = [thunkMiddleware.withExtraArgument({ axios })];

const store = createStore(
  starReducer,
  composeWithDevTools(applyMiddleware(...middleware, createLogger()))
);

export default store;
