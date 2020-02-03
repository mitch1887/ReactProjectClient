import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ReviewPage from './auth/ReviewPage';
import Signup from './auth/Signup';
import Signin from './auth/Login';


const Main = (props) => {
  return (
    <Switch>
      <Route exact path='/'><ReviewPage updateToken={props.updateToken} sessionToken={props.sessionToken} /></Route>
      <Route exact path='/signin'><Signin updateToken={props.updateToken}/></Route>
      <Route exact path='/signup'><Signup updateToken={props.updateToken}/></Route>
    </Switch>
  );
}

export default Main;
