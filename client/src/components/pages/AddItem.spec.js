import React from "react";
import { shallow } from "enzyme";
import AddItem from "./AddItem.jsx";

describe.skip("Add item test", () => {
  let wrapper;
  const updateCurrentTodo = jest.fn();
  const addTodo = jest.fn();
  beforeEach(() => {
    wrapper = shallow(
      <AddItem
        currentTodo={""}
        updateCurrentTodo={updateCurrentTodo}
        addTodo={addTodo}
      />
    );
  });

  it("should be renderend properly", () => {
    expect(wrapper).not.toBe.null;
    expect(wrapper.find("input").length).toEqual(1);
    expect(wrapper.find("button").length).toEqual(1);
    expect(wrapper.find("label").length).toEqual(1);
  });

  it("should able to set the input", () => {
    const inp = wrapper.find("input");
    inp.simulate("change", {
      target: {
        value: "abc",
      },
    });
    expect(updateCurrentTodo).toHaveBeenCalledTimes(1);
    expect(updateCurrentTodo).toHaveBeenCalledWith({
      target: {
        value: "abc",
      },
    });
  });

  it("should able to add on click", () => {
    const inp = wrapper.find("button");
    inp.simulate("click");
    expect(addTodo).toHaveBeenCalledTimes(1);
  });
});
