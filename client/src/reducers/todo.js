const initailStateRed1 = {
  todos: [],
};

const initailStateRed2 = {
  item: "",
};

export const todoReducer = (state = initailStateRed1, action) => {
  let nextState;
  switch (action.type) {
    case "GET_TODOS":
      nextState = { ...state, ...{ todos: action.data } };
      break;
    default:
      nextState = state;
  }
  return nextState;
};

export const itemReducer = (state = initailStateRed2, action) => {
  let nextState;
  switch (action.type) {
    case "SET_ITEM":
      nextState = { ...state, ...{ item: action.data } };
      break;
    default:
      nextState = state;
  }
  return nextState;
};
