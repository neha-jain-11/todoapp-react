import { bindActionCreators } from "redux";

const initailState = {
  todos: [],
};

export const todoReducer = (state = initailState, action) => {
  let nextState;
  console.log("yooo 3", state, action);
  switch (action.type) {
    case "GET_TODOS":
      nextState = { ...state, ...{ todos: action.data } };
      break;
    default:
      nextState = state;
  }
  console.log("yooo 4", nextState);
  return nextState;
};
