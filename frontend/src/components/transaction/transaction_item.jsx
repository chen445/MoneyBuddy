import React from 'react';

class TransactionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: this.props.category,
            description: this.props.description,
            amount: this.props.amount,
            type: this.props.type
        };

        this.handleClick = this.handleClick.bind(this);
        this.errorClassName = this.errorClassName.bind(this);
        this.errors = this.errors.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.action(this.state);
    }

    update(field) {
        return (e) =>
            this.setState({
                [field]: e.currentTarget.value,
            });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleClick}>
                    <h1>Create a transaction</h1>
                    <select id="typeInput" onChange={this.update("type")}>
                        Type
                        <br></br>
                        <option value={this.state.type}>Income</option>
                        <option value={this.state.type}>Expense</option>
                        <br />
                        <br />
                    </select>
                    <select id="categoryInput" onChange={this.update("category")}>
                        Category
                        <br></br>
                        {this.state.categories.map(category => (
                            <option value={this.state.category}>{category.name}</option>
                        ))}
                        <br />
                        <br />
                    </select>
                    <label>
                        Description
                        <input
                            type="text"
                            value={this.state.description}
                            onChange={this.update("description")}
                        />
                    </label>
                    <label>
                        Amount
                        <input
                            type="text"
                            value={this.state.amount}
                            onChange={this.update("amount")}
                        />
                    </label>
                    <button type="submit" value={this.state.type}>Report Income</button>
                    <button type="submit" value={this.state.type}>Report Expense</button>
                </form>
            </div>
        );
    }
}

export default TransactionForm;