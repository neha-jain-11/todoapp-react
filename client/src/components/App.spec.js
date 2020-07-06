import React from "react";
import { mount } from "enzyme";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  BrowserRouter,
} from "react-router-dom";
import App from "./App.jsx";

describe("app", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App />);
  });
  it("Router File", () => {
    expect(wrapper).not.toBe.null;

    console.log(wrapper.find("a").length);
    console.log(wrapper.find(Link).length);

    console.log(wrapper.find(Link).at(0).html());
    console.log(wrapper.find(Link).at(0).text());

    wrapper.find("a").at(0).simulate("click", { button: 0 });
    console.log(wrapper.html());
  });
});
