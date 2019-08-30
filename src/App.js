import React, { Component, lazy } from "react";
import { Link, Route, Switch } from "react-router-dom";
import asyncComponent from "./hoc/asyncComponent/asyncComponent";

import Users from "./containers/Users";

const asyncPizza = lazy(() => import("./containers/Pizza"));

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/">Users</Link> | <Link to="/pizza">Pizza</Link>
        </div>
        <Route exact path="/" component={Users} />
        <Route path="/pizza" component={asyncComponent(asyncPizza)} />
      </div>
    );
  }
}

export default App;
