import React from 'react';
import { withRouter } from 'react-router-dom';
import TransactionItem from './transaction_item';

class Transactions extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            transactions: []
        }
    }

    componentWillMount() {
        this.props.fetchTransactions();
    }

    componentWillReceiveProps(newState) {
        this.setState({ transaction: newState.transactions });
    }

    render() {
        return (
            <div>
                <h2>Transactions</h2>
                {this.state.transactions.map(trans => (
                    <TransactionItem
                        key={trans._id}
                        category={trans.category}
                        description={trans.description}
                        amount={trans.amount}
                        type={trans.type}
                    />
                ))}
            </div>
        );

    }
}

export default withRouter(Transactions);