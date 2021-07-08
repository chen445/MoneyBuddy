import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import NavBar from "./nav_bar";
import { fetchCurrentUser } from "../../actions/session_actions";


const mapStateToProps = (state) => ({
  currentUser: state.session.user,
  point: state.session.user ? state.session.user.point: undefined
});

const mapDispatchToProps = (dispatch) => ({
  signout: () => dispatch(logout()),
  fetchCurrentUser: () => dispatch(fetchCurrentUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
