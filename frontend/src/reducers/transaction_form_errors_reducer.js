import { RECEIVE_TRANSACTION_ERRORS,
  RECEIVE_TRANSACTION
} from "../actions/transaction_action";

const TransactionsErrorsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TRANSACTION_ERRORS:
      return action.error;
    case RECEIVE_TRANSACTION:
      return {};
    default:
      return state;
  }
};

export default TransactionsErrorsReducer;
