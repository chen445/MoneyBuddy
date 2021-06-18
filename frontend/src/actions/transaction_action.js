import * as APIUtil from "../util/transaction_api_util";
export const RECEIVE_TRANSACTION = "RECEIVE_TRANSACTIONS";
export const RECEIVE_TRANSACTIONS = "RECEIVE_TRANSACTION";
export const REMOVE_TRANSACTION = "REMOVE_TRANSACTION";
export const RECEIVE_TRANSACTION_ERRORS = " RECEIVE_TRANSACTION_ERRORS";


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


export const receiveTransactionErrors = (error) => ({
  type: RECEIVE_TRANSACTION_ERRORS,
  error
});

export const editTrans = (data) => (dispatch) =>
  APIUtil.updateTransaction(data).then(
    (data) => dispatch(receiveTransaction(data)),
    (err) => dispatch(receiveTransactionErrors(err.response.data))
);

export const createTrans = (transaction) => (dispatch) =>
  APIUtil.createTransaction(transaction).then(
    (transaction) => dispatch(receiveTransaction(transaction)),
    (err) => dispatch(receiveTransactionErrors(err.response.data))
  );

export const fetchTrans = () => (dispatch) =>
  APIUtil.getTransactions().then(
    () => (
      dispatch(receiveTransactions()),
      (err) => dispatch(receiveTransactionErrors(err.response.data))
      )
  );

export const fetchTran = (id) => (dispatch) =>
  APIUtil.getTransactions(id).then(
    (transaction) => (
      dispatch(receiveTransaction(transaction)),
      (err) => dispatch(receiveTransactionErrors(err.response.data))
    )
  );

export const removeTrans = (id) => (dispatch) =>
  APIUtil.removeTransaction(id).then(
    () => (
      dispatch(removeTransaction(id)),
      (err) => dispatch(receiveTransactionErrors(err.response.data))
    )
);
