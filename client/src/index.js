import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { todoReducer, itemReducer } from "./reducers/todo";
console.log("start");

const combineReducer = combineReducers({
  todos: todoReducer,
  item: itemReducer,
});
const store = new createStore(combineReducer);
// console.log(store.getState());

// store.dispatch({
//   type: "SET_ITEM",
//   data: "Use Redux",
// });
// console.log(store.getState());

const element = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  element
);
