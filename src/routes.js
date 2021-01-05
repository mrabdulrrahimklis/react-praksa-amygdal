import React from "react";
import { Switch, Route } from 'react-router-dom';

import Login from './views/Login/Login.jsx'
import Profile from './views/Profile/Profile'
import Home from './views/Home/Home'

const Routes = () => {
    return (
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/profile" component={Profile} />
            <Route path="/" component={Home} />
        </Switch>
    );
  };
  
  export default Routes;
  