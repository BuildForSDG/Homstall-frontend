import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute/';
import { publicRoutes, privateRoutes } from './routes';


function App() {
  return (
    <div>
      <Router>
        <Switch>
          {publicRoutes.map((route, index) => {
            return <Route exact path={route.url} component={route.component} key={index} />;
          })}
        </Switch>
        <Switch>
          {privateRoutes.map((route, index) => {
            return <PrivateRoute exact path={route.url} component={route.component} key={index} />;
          })}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
