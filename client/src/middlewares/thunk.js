import { getTodos } from "../services/todos";
import axios from "axios";

export const thunkMid = (store) => (next) => (action) => {
  console.log("i am thunk");
  if (typeof action === "function") {
    return action(store.dispatch, store.getState);
  } else {
    return next(action);
  }
};

//example

export const addTodo = () => {
  return async (dispatch, getState) => {
    const res = await getTodos();
    dispatch({
      type: "GET_TODOS",
      data: res,
    });
    console.log("getState", getState());
  };
};
