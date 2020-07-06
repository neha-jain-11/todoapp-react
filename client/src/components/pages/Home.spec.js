import React from "react";
import { shallow } from "enzyme";
import Home from "./Home.jsx";
import AddItem from "./AddItem.jsx";
import ListItems from "./ListItems.jsx";
import * as Todos from "../../services/todos";

describe("Home test", () => {
  let wrapper;
  let mockService;

  beforeEach(() => {
    mockService = jest
      .spyOn(Todos, "getTodos")
      .mockImplementation(() => [{ id: "11" }]);
    wrapper = shallow(<Home />);
  });

  it("should be renderend properly", () => {
    expect(wrapper).not.toBe.null;
    expect(wrapper.find(AddItem).length).toEqual(1);
    expect(wrapper.find(AddItem)).toBeTruthy;
    expect(wrapper.find(ListItems).length).toEqual(1);
    expect(wrapper.find("button").length).toEqual(1);
  });

  it("should be renderend Additem properly", (done) => {
    const addItem = wrapper.find(AddItem);
    expect(addItem.props().currentTodo).toEqual("");
    expect(mockService).toHaveBeenCalledTimes(1);

    addItem.props().updateCurrentTodo({ target: { value: "abc" } });
    setTimeout(() => {
      expect(wrapper.state().currentTodo).toEqual("abc");
      done();
    });
  });

  it("snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
