import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

import { Provider } from "react-redux";

import configStore from "./store/createStore";

const store = configStore();
console.log(store.getState());
store.subscribe(() => {
  console.log(store.getState());
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
