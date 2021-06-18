import {
  RECEIVE_TRANSACTION,
  RECEIVE_TRANSACTIONS,
  REMOVE_TRANSACTION,
} from "../actions/transaction_action";

const transactionReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_TRANSACTIONS:
            return action.transactions;
        case RECEIVE_TRANSACTION:
            return Object.assign({}, state, {[action.transaction.id]: action.transaction});
        case REMOVE_TRANSACTION:
             const nextState = Object.assign({}, state);
             delete nextState[action.transaction.id];
             return nextState;
        default:
            return state;
    }
};

export default transactionReducer;