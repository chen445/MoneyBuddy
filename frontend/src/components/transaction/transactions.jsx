import React from 'react';
import { withRouter } from 'react-router-dom';
import TransactionItem from './transaction_item';
import { Link } from "react-router-dom";
import { MdDescription } from 'react-icons/md';

class Transactions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      transactions: [],
      show: false,
      editshow: false,
    };
  }

  componentWillMount() {
    this.props.fetchTransactions();
  }

  componentWillReceiveProps(newState) {
    this.setState({ transactions: newState.transactions });
  }

  render() {
    const sortedTransactions = this.state.transactions.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );

    let transactionsView = this.state.show
      ? sortedTransactions
          .slice(8)
          .map((trans) => (
            <TransactionItem
              key={trans.id}
              category={trans.category}
              description={trans.description}
              amount={trans.amount}
              icon={trans.icon}
              type={trans.type}
              date={trans.date}
            />
          ))
      : "";
    let buttonView;
    if (this.state.show) {
      buttonView = (
        <button
        onClick={(e)=>{
          {this.setState({show: false})}
        }}>
        Show less -
        </button>
      );
    } else {
      buttonView = (
        <button
          onClick={(e) => {
            {
              this.setState({ show: true });
            }
          }}
        >
          Show more +
        </button>
      );
    }

    // if (this.state.editshow)
    // {
    //   <button
    //   onClick={(e)=>{
    //      {
    //        this.props.removeTrans(e.target.id);
    //      }
    //   }}
    //   >
    //     Delete
    //   </button>
    // }else{
    //   return ""
    // }

    return (
      <div className="index-trans">
        <div className="detail">
          {/* <div>
          <Link to="/create_transaction">+</Link>
        </div> */}
          <h2>Transactions</h2>
          {sortedTransactions.slice(0, 7).map((trans) => (
            <TransactionItem
              key={trans.id}
              category={trans.category}
              description={trans.description}
              amount={trans.amount}
              icon={trans.icon}
              type={trans.type}
              date={trans.date}
            />
          ))}
          {transactionsView}
          <div className="show-more">{buttonView}</div>
        </div>
      </div>
    );
  }
}

export default withRouter(Transactions);