import React from "react";
import { Route } from "react-router";
import LoginFormContainer from "./session/login_form_container"
import SignupFormContainer from "./session/signup_form_container";
import {Home} from './home/home'
import NavContainer from './nav_bar/nav_bar_container'
const App = () => (
  <div>
    <Route exact path="/" component={Home}></Route>
    <Route exact path="/home" component={NavContainer}></Route>
    <Route exact path="/login" component={LoginFormContainer}></Route>
    <Route exact path="/signup" component={SignupFormContainer}></Route>
  </div>
);


export default App;