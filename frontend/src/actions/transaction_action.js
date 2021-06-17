import * as APIUtil from "../util/transaction_api_util";
export const RECEIVE_TRANSACTION = "RECEIVE_TRANSACTIONS";
export const RECEIVE_TRANSACTIONS = "RECEIVE_TRANSACTION";
export const REMOVE_TRANSACTION = "REMOVE_TRANSACTION";

export const receiveTransaction = (transaction) => ({
    type: RECEIVE_TRANSACTION,
    transaction,
});

export const receiveTransactions = () => ({
    type: RECEIVE_TRANSACTIONS,
});

export const removeTransaction = (id) => ({
    type: REMOVE_TRANSACTION,
    id
});

export const createTrans = transaction => dispatch => (
    APIUtil.createTransaction(transaction).then(() => (
        dispatch(receiveTransaction(transaction))
    ))
);

export const fetchTrans = () => dispatch => (
    APIUtil.getTransactions().then(() => (
        dispatch(receiveTransactions())
    ))
);

export const fetchTran = (id) => dispatch => (
    APIUtil.getTransactions(id).then((transaction) => (
        dispatch(receiveTransaction(transaction))
    ))
);

export const removeTrans = id => dispatch => (
    APIUtil.delete(id).then((trans) => (
        dispatch(removeTransaction(trans))
    ))
);
