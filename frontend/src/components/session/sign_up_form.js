import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { signup } from "../../actions/session";
import SessionForm from "./session_form";
import { login, receiveErrors } from "../../actions/session";

const mapStateToProps = ({ errors }) => {
  return {
    email: "",
    password: "",
    username: "",
    errors: errors.session,
    formType: "Create Account",
    displayLink: {
      link: "/login",
      name: "Already have an account?",
      to: "Login",
    },
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    action: (user) => dispatch(signup(user)),
    demoAction: (user) => dispatch(login(user)),
    clearErrorAction: () => dispatch(receiveErrors({})),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
