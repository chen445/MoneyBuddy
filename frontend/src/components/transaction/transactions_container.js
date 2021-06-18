import { connect } from 'react-redux';
import { fetchTrans } from '../../actions/transaction_action';
import Transactions from './transactions';

const mapStateToProps = (state) => {
    return {
        transactions: state.entities.transactions
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchTransactions: () => dispatch(fetchTrans())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);

