import "../public/index.css";
import store from "./store.js";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRoutes from "./components/AppRoutes.js";

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <Provider store={store}>
    <AppRoutes />
  </Provider>
);
