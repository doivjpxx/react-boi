
import React, { Component, lazy } from 'react';
import { Link, Route } from 'react-router-dom';

import Users from './containers/Users';

const Pizza = lazy(() => import('./containers/Pizza'));

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/">Users</Link>
          <Link to="/pizza">Pizza</Link>
        </div>
        <Route to="/pizza" component={Pizza} />
        <Route to="/" exact component={Users} />
      </div>
    )
  }
}

export default App;