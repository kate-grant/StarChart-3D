import "../public/index.css";
import store from "./store";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>{/* app goes here */}</Provider>,
  document.getElementById("app") // id of the div in your index.html
);
