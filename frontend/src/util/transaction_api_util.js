import axios from "axios";

export const getTransactions = () => {
    return axios.get(`api/transaction`)
}

export const getTransaction = id => {
    return axios.get(`api/transaction/${id}`)
}

export const createTransaction = (transData) => {
    return axios.post("/api/transaction", transData);
};

export const removeTransaction = (id) => {
    return axios.delete(`/api/transaction/${id}`);
};