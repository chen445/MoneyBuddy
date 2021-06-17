import React from "react";
import { Route, Switch } from "react-router";
import LoginFormContainer from "./session/login_form_container"
import SignupFormContainer from "./session/signup_form_container";
import {Home} from './home/home'
import NavContainer from './nav_bar/nav_bar_container'
import {AuthRoute, ProtectedRoute} from '../util/route_util'
import ReportContainer from "./report/report_container";
import IconsContainer from './icon/icon_container'
const App = () => (
  <div>
    <div style={{ width: "25%" }}>
      <Route
        render={({ location }) =>
          ["/signup", "/login", "/", "/icon"].includes(
            location.pathname
          ) ? null : (
            <NavContainer />
          )
        }
      />
    </div>
    <Switch>
      {/* <Route exact path="/test" component={IconsContainer}></Route> */}
      <Route exact path="/" component={Home}></Route>
      <ProtectedRoute
        exact
        path="/report"
        component={ReportContainer}
      ></ProtectedRoute>
      <ProtectedRoute
        exact
        path="/icon"
        component={IconsContainer}
      ></ProtectedRoute>
      <AuthRoute exact path="/login" component={LoginFormContainer}></AuthRoute>
      <AuthRoute
        exact
        path="/signup"
        component={SignupFormContainer}
      ></AuthRoute>
    </Switch>
  </div>
);


export default App;