import React from "react";
import { Route, Switch } from "react-router";
import LoginFormContainer from "./session/login_form_container"
import SignupFormContainer from "./session/signup_form_container";
import {Home} from './home/home'
import NavContainer from './nav_bar/nav_bar_container'
import {AuthRoute, ProtectedRoute} from '../util/route_util'
import ReportContainer from "./report/report_container";

const App = () => (
  <div>
  <Switch>
    <Route exact path="/" component={Home}></Route>
    <Route exact path="/report" component={ReportContainer}></Route>
    <ProtectedRoute
      exact
      path="/home"
      component={NavContainer}
    ></ProtectedRoute>
    <AuthRoute exact path="/login" component={LoginFormContainer}></AuthRoute>
    <AuthRoute exact path="/signup" component={SignupFormContainer}></AuthRoute>
    </Switch>
  </div>
);


export default App;