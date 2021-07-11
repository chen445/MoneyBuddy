import React, { PureComponent } from "react";
import ExpensePieChart from "./expense_pie_chart";
import {getColors} from './utils'
import IncomePieChart from "./income_pie_chart";
import TransactionsBarChart from './transaction_bar_chart'

class Report extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showpop: false,
      alreadyshow: false,
      datepop: false,
      startDate: "",
      endDate: "",
      type :"expense"
    };
    this.update = this.update.bind(this);
    this.datePop = this.datePop.bind(this);
    this.displayDate = this.displayDate.bind(this);
    this.newDate = this.newDate.bind(this);
    this.withTimezone = this.withTimezone.bind(this);
  }
  update(field) {
    return (e) => {
      return this.setState({
        [field]: e.currentTarget.value,
      });
    };
  }

  datePop() {
    if (this.state.datepop) {
      return (
        <div className="pop-up-date">
          <div className="pop-up-date-content">
            <label>
              Start Date:
              <input
                type="date"
                value={this.state.startDate}
                onChange={this.update("startDate")}
              />
            </label>
            <br />
            <label>
              End Date:
              <input
                type="date"
                value={this.state.endDate}
                onChange={this.update("endDate")}
              />
            </label>
            <div className="date-pop-button">
              <button
                onClick={(e) => {
                  this.setState({ datepop: false });
                }}
              >
                Submit
              </button>
              <br />
              <br />
              <button
                onClick={(e) => {
                  this.setState({ datepop: false });
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      return "";
    }
  }
  newDate(date) {
    date = new Date(date);
    return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
  }

  withTimezone(date_str) {
    // Get timezone, for example "EST"
    const timezone = new Date()
      .toLocaleTimeString("en-us", { timeZoneName: "short" })
      .split(" ")[2];
    return date_str + " " + timezone;
  }

  displayDate() {
    const sortedTransactions = this.props.transactions.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );

    let endDate = this.state.endDate;
    if (!endDate || endDate === "") {
      endDate = sortedTransactions[0].date;
    } else {
      endDate = this.withTimezone(endDate);
    }

    let startDate = this.state.startDate;
    if (!startDate || startDate === "") {
      startDate = sortedTransactions[sortedTransactions.length - 1].date;
    } else {
      startDate = this.withTimezone(startDate);
    }
    return (
      <h2>
        {this.newDate(startDate)} to {this.newDate(endDate)}
      </h2>
    );
  }

  componentDidMount() {
    this.props.fetchTransactions();
  }

  renderChart(transactions) {
    if (this.state.type === "expense") {
      return <ExpensePieChart transactions={transactions} />
    } else if (this.state.type==="income"){
       return <IncomePieChart transactions={transactions} />
    }else{
      return <TransactionsBarChart transactions={transactions}/>
    }
  }

  render() {
    if (this.props.transactions.length === 0) {
      return (
        <div className="report">
          <h1>No transactions</h1>
        </div>
      );
    }

    let transactions = this.props.transactions;
    if (this.state.endDate !== "" && this.state.startDate !== "") {
      transactions = transactions.filter((ex) => {
        const endDate = new Date(this.withTimezone(this.state.endDate));
        endDate.setHours(23, 59, 59);
        return (
          new Date(ex.date) >=
            new Date(this.withTimezone(this.state.startDate)) &&
          new Date(ex.date) <= endDate
        );
      });
    }

    return (
      <div className="report">
        <div className="top-part">
          {this.datePop()}
          {this.displayDate()}
          <div id="filter">
            <button
              onClick={(e) => {
                this.setState({ datepop: true });
              }}
            >
              Filter Date
            </button>
            <div >
              <select
                className="select-type"
                id="typeInput"
                value={this.state.type}
                onChange={this.update("type")}
              >
                <option value={"expense"}>Expense</option>
                <option value={"income"}>Income</option>
                <option value={"balance"}>Balance</option>
              </select>
            </div>
          </div>
        </div>
        {this.renderChart(transactions)}
      </div>
    );
  }
}

export default Report;
