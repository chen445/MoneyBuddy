import React from "react";
import { Route } from "react-router";
import LoginFormContainer from "./session/login_form_container"
import SignupFormContainer from "./session/signup_form_container";
const App = () => (
  <div>
    <Route exact path="/login" component={LoginFormContainer}></Route>
    <Route exact path="/signup" component={SignupFormContainer}></Route>
  </div>
);


export default App;