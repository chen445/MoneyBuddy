import React from "react";
import { Route } from "react-router";
import LoginFormContainer from "./session/login_form_container"
import SignupFormContainer from "./session/signup_form_container";
import {Home} from './home/home'
import NavContainer from './nav_bar/nav_bar_container'
import {AuthRoute, ProtectedRoute} from '../util/route_util'
const App = () => (
  <div>
    <Route exact path="/" component={Home}></Route>
    <ProtectedRoute
      exact
      path="/home"
      component={NavContainer}
    ></ProtectedRoute>
    <AuthRoute exact path="/login" component={LoginFormContainer}></AuthRoute>
    <AuthRoute exact path="/signup" component={SignupFormContainer}></AuthRoute>
  </div>
);


export default App;