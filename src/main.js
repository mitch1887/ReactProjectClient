import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ReviewPage from './auth/ReviewPage';
import Signup from './auth/Signup';
import Signin from './auth/Login';

const Main = () => {
  return (
    <Switch>
      <Route exact path='/' component={ReviewPage}></Route>
      <Route exact path='/signin' component={Signin}></Route>
      <Route exact path='/signup' component={Signup}></Route>
    </Switch>
  );
}

export default Main;
