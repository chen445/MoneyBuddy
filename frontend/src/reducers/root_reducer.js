import { combineReducers } from 'redux';
import errors from './errors_reducer';
import session from './session_reducer';
import categoryReducer from './category_reducer';

const RootReducer = combineReducers({
    errors,
    session,
    category: categoryReducer,
});

export default RootReducer;
