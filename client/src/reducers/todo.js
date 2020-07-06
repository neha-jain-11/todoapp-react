const initailStateRed1 = {
  todos: [],
};

const initailStateRed2 = {
  item: "",
};

export const todoReducer = (state = initailStateRed1, action) => {
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

export const itemReducer = (state = initailStateRed2, action) => {
  let nextState;
  console.log("yooo 3", state, action);
  switch (action.type) {
    case "SET_ITEM":
      nextState = { ...state, ...{ item: action.data } };
      break;
    default:
      nextState = state;
  }
  console.log("yooo 4", nextState);
  return nextState;
};
