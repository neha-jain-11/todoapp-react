import configureMockStore from "redux-mock-store";
import { thunkMid } from "./thunk";
const middlewares = [thunkMid];
const mockStore = configureMockStore(middlewares);

describe("async actions", () => {
  it("should dispatch actions of ConstantA and ConstantB", () => {
    const expectedActions = [
      { type: "CONSTANT_A", payload: "a" },
      { type: "CONSTANT_B", payload: "b" },
    ];

    const store = mockStore({});
    store.dispatch({ type: "CONSTANT_A", payload: "a" });
    store.dispatch({ type: "CONSTANT_B", payload: "b" });

    expect(store.getActions()).toEqual(expectedActions);
    console.log(">>", store.getState());
  });
});
