import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute/';
import { publicRoutes, privateRoutes } from './routes';

function App() {
  return (
    <Router>
      <Switch>
        {publicRoutes.map((route, index) => {
          return <Route path={route.url} component={route.component} key={index} exact />;
        })}
      </Switch>
      <Switch>
        {privateRoutes.map((route, index) => {
          return <PrivateRoute exact path={route.url} component={route.component} key={index} />;
        })}
      </Switch>
    </Router>
  );
}

export default App;
