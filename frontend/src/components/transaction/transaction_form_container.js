import { connect } from 'react-redux';
import TransactionForm from './transaction_form'
import { createTrans } from '../../actions/transaction_actions';

const mapStateToProps = (state) => {
    return {
        name: "",
        description: "",
        amount: "",
        type: ""
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        action: (transaction) => dispatch(createTrans(transaction)),

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionForm);