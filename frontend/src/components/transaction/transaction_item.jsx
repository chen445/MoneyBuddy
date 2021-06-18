import React from 'react';

class TransactionItem extends React.Component {
    render() {
        return (
            <div>
                <h3>{this.props.type}</h3>
                <ul>
                    <li>{this.props.category.icon}</li>
                    <li>{this.props.category.name}</li>
                    <li>{this.props.description}</li>
                    <li>{this.props.amount}</li>

                </ul>
            </div>
        );
    }
}

export default TransactionItem;