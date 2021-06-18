import {
    RECEIVE_TRANSACTION,
    RECEIVE_TRANSACTIONS
} from '../actions/transaction_action';

const transactionReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_TRANSACTIONS:
            return action.transactions;
        case RECEIVE_TRANSACTION:
            const newTransaction = { [action.transaction.id]: action.transaction };
            return Object.assign({}, state, newTransaction);
        case REMOVE_TRANSACTION:
            const newTransaction = { [action.transaction.id]: action.transaction };
            return Object.assign({}, state, newTransaction);
        default:
            return state;
    }
};

export default transactionReducer;