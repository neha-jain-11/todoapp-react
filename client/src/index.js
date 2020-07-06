import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  BrowserRouter,
} from "react-router-dom";
import Home from "./components/pages/Home.jsx";

console.log("start");
const element = document.getElementById("root");
ReactDOM.render(
  <>
    <Router>
      <Link to="/home">Home</Link>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
    </Router>
  </>,
  element
);
