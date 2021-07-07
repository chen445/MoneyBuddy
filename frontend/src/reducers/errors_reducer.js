
import { combineReducers } from 'redux';

import SessionErrorsReducer from './session_errors_reducer';
import TransactionsErrorsReducer from './transaction_form_errors_reducer'

export default combineReducers({
  session: SessionErrorsReducer,
  transaction: TransactionsErrorsReducer,
});