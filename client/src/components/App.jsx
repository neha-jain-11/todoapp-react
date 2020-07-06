import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  BrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home.jsx";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="app-router">
        <Router>
          <Link to="/home">Home</Link>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
