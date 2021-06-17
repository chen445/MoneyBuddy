
import {
    RECEIVE_CURRENT_USER,
    RECEIVE_USER_LOGOUT,
    RECEIVE_USER_SIGN_IN
} from '../actions/session_actions';
import {
     UPDATE_POINT
} from '../actions/purchase_action'

const initialState = {
    isAuthenticated: false,
    user: {}
};

export default function (state = initialState, action) {
    let newState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !!action.currentUser,
                user: action.currentUser
            };
        case RECEIVE_USER_LOGOUT:
            return {
                isAuthenticated: false,
                user: {}
            };
        case RECEIVE_USER_SIGN_IN:
            return {
                ...state,
                isSignedIn: true
            }
        case UPDATE_POINT:
            newState.user.point = action.point;
            return newState;
        default:
            return state;
    }
}