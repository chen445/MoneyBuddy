import { combineReducers } from 'redux';
import errors from './errors_reducer';
import session from './session_reducer';
import iconsReducer from './icons_reducer'

const RootReducer = combineReducers({
  errors,
  session,
  icons: iconsReducer,
});

export default RootReducer;
