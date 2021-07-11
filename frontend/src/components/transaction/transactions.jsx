import React from "react";
import { withRouter } from "react-router-dom";
import TransactionItem from "./transaction_item";
import { Link } from "react-router-dom";
import { MdDescription } from "react-icons/md";
import { AiFillMinusCircle } from "react-icons/ai";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class Transactions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      transactions: [],
      show: false,
      editshow: false,
    };
    this.getDelete.bind(this);
  }

  componentWillMount() {
    this.props.fetchTransactions();
  }

  componentWillReceiveProps(newState) {
    this.setState({ transactions: newState.transactions });
  }

  getDelete(id) {
    return this.state.editshow ? (
      <button
        onClick={(e) => this.props.removeTrans({ id })}
        id="deleteTran"
      >
        <AiFillMinusCircle size={26} color={"firebrick"} />
      </button>
    ) : (
      ""
    );
  }

  render() {
    const sortedTransactions = this.state.transactions.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );

    let transactionsView = this.state.show
      ? sortedTransactions
          .slice(8)
          .map((trans) => (
            <CSSTransition
                key={trans.id}
                classNames="transaction-animation"
                timeout={{ exit: 300 }}
              >
              <TransactionItem
                key={trans.id}
                category={trans.category}
                description={trans.description}
                amount={trans.amount}
                icon={trans.icon}
                type={trans.type}
                date={trans.date}
                delete={this.getDelete(trans.id)}
              />
            </CSSTransition>
          ))
      : "";

    let buttonView = null;
    if (sortedTransactions.length > 8) {
      if (this.state.show) {
        buttonView = (
          <button
            onClick={(e) => {
              {
                this.setState({ show: false });
              }
            }}
          >
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
    }

    return (
      <div className="index-trans">
        <div className="detail">
          <h2>Transactions</h2>
          <div id="edit">
            <button
              onClick={(e) => {
                this.state.editshow
                  ? this.setState({ editshow: false })
                  : this.setState({ editshow: true });
              }}
            >
              Edit
            </button>
          </div>
          <TransitionGroup>
            {sortedTransactions.slice(0, 7).map((trans) => (
              <CSSTransition
                key={trans.id}
                classNames="transaction-animation"
                timeout={{ exit: 300 }}
              >
                <TransactionItem
                  key={trans.id}
                  category={trans.category}
                  description={trans.description}
                  amount={trans.amount}
                  icon={trans.icon}
                  type={trans.type}
                  date={trans.date}
                  delete={this.getDelete(trans.id)}
                />
              </CSSTransition>
            ))}
            {transactionsView}
          </TransitionGroup>
          {sortedTransactions.length === 0 ? (
            <h3>No Transactions!</h3>
          ) : (
            <div className="show-more">{buttonView}</div>
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(Transactions);
