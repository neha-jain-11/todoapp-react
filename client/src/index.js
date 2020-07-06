import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { todoReducer } from "./reducers/todo";
console.log("start");

const store = new createStore(todoReducer);
const element = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  element
);
