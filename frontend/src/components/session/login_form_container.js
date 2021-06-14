
import {connect} from 'react-router-dom';
import SessionForm from './session_form.jsx';
import {login,receiveErrors} from '../../actions/session';

const mapStateToProps = ({errors})=>{
    return {
        errors: errors.session,
        email: "",
        password: "",
        formType: "Sign-in",
        displayLink: {link: '/signup',  name: 'Create a New Account'}
    }
}


const mapDispatchToProps = (dispatch) => {
  return {
    action: (user) => dispatch(login(user)),
    demon: (user) => dispatchEvent(login(user)),
    clearErrorAction: () => dispatch(receiveErrors({})),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);