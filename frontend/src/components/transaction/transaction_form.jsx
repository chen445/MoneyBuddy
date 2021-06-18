import React from 'react';
import { IconsList } from '../icon/icon_list';
import Select from "react-select";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { BiCoin } from "react-icons/bi";

class TransactionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "",
      categoryOption: null,
      description: "",
      amount: this.props.amount,
      type: this.props.type,
      date: new Date(),
      showup: false,
      alreadyshow: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.submit = this.submit.bind(this);
    // this.popup = this.popup.bind(this);
  }

  componentDidMount() {
    // window.addEventListener("click", () => {
    //   this.setState({ showup: false });
    // });
    this.props.fetchAllCategory();
  }

  // componentDidMount() {
  //   if (this.props.currentUser.firstLogin && !this.state.alreadyshow) {
  //     this.setState({ showpop: true });
  //     this.setState({ alreadyshow: true });
  //   }
  // }

  // popup() {
  //   if (!this.state.showpop) {
  //     return null;
  //   } else {
  //     return (
  //       <div className="pop-up">
  //         <h3>
  //           Welcome, You earned 1 point! <BiCoin color={"gold"} />
  //         </h3>
  //       </div>
  //     );
  //   }
  // }

  submit() {
    this.props.action({
      category: this.state.category,
      description: this.state.description,
      amount: this.state.amount,
      type: this.state.type,
      date: this.state.date.toISOString(),
    });
  }

  handleClick(e) {
    e.preventDefault();
    this.props.action(this.state);
  }

  update(field) {
    return (e) => {
      return this.setState({
        [field]: e.currentTarget.value,
      });
    };
  }

  render() {
    if (
      this.props.categories === undefined ||
      this.props.categories.length === 0
    ) {
      return null;
    }

    return (
      <div className="create-transaction">
        {/* {this.popup()} */}
        <form onSubmit={this.handleClick} className="create-form">
          <div className="calendar">
            <h1>Create a transaction</h1>
            <div style={{ marginLeft: "250px", marginTop: "60px" }}>
              <Calendar
                onChange={(date) => this.setState({ date })}
                value={this.state.date}
                maxDate={new Date()}
              />
            </div>
          </div>
          <div className="info">
            <select
              className="select-type"
              id="typeInput"
              value={this.state.type}
              onChange={this.update("type")}
            >
              <br></br>
              <option value={"expense"}>Expense</option>
              <option value={"income"}>Income</option>
              <br />
              <br />
            </select>
            <h2>Category</h2>
            <Select
              className="drop-down"
              value={this.state.categoryOption}
              onChange={(selectedOption) =>
                this.setState({
                  category: selectedOption.value,
                  categoryOption: selectedOption,
                })
              }
              options={this.props.categories.map((category) => {
                return {
                  value: category.name,
                  label: (
                    <div className="img-icon">
                      {IconsList[category.icon - 1]}
                      <h3>{" " + category.name}</h3>
                    </div>
                  ),
                };
              })}
            ></Select>
            <br />
            <br />
            <label className="input-info1">
              Amount
              <br />
              <input
                type="text"
                value={this.state.amount}
                onChange={this.update("amount")}
              />
            </label>
            <br></br>
            <label className="input-info">
              Description
              <br></br>
              <textarea
                type="text"
                value={this.state.description}
                onChange={this.update("description")}
              />
            </label>
            <button type="submit" value={this.state.type} onClick={this.submit}>
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default TransactionForm;