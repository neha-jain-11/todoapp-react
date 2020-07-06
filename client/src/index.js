import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { todoReducer, itemReducer } from "./reducers/todo";
import { loggerMid } from "./middlewares/logger.js";
import { thunkMid } from "./middlewares/thunk";
// import thunk from "redux-thunk";
console.log("start");

const combineReducer = combineReducers({
  todos: todoReducer,
  item: itemReducer,
});

const store = new createStore(
  combineReducer,
  applyMiddleware(loggerMid, thunkMid)
);

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
