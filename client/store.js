import { createStore, applyMiddleware } from "redux";
import reducer from "./redux/reducer";
import starReducer from "./redux/starReducer";
//import auth from "./redux/auth";
//import { combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "@redux-devtools/extension";

//let middleware = [thunkMiddleware.withExtraArgument({ axios })];

const store = createStore(
  starReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware, createLogger()))
);

export default store;
