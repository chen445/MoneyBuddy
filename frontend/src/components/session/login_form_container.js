
import {connect} from 'react-redux';
import SessionForm from './session_form.jsx';
import {login,receiveErrors} from '../../actions/session_actions';

const mapStateToProps = ({errors})=>{
    return {
        errors: errors.session,
        email: "",
        password: "",
        formType: "Sign-in",
        displayLink: {link: '/signup',  name: 'Create a New Account', to: 'Sign Up'}
    }
}


const mapDispatchToProps = (dispatch) => {
  return {
    action: (user) => dispatch(login(user)),
    demo: (user) => dispatch(login(user)),
    clearErrorAction: () => dispatch(receiveErrors({})),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);