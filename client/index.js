import "../public/index.css";
import store from "./store";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRoutes from "./components/AppRoutes";

ReactDOM.render(
  <Provider store={store}>
    <AppRoutes />
  </Provider>,
  document.getElementById("app") // id of the div in index.html
);
