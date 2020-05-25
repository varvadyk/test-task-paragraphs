import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,


} from 'react-router-dom';
import {routes} from './router';

function App() {
  return (
    <>
         <Router>
        <Switch>
{
  routes.map(route =>(
    <Route exact = {route.exact}
     key={route.toString()} 
     path={route.path}>
      {route.component}
    </Route>
     ))
    }
       </Switch>
    </Router>
    </>
  )
};

export default App;
