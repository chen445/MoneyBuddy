import React from 'react';

class CategoryForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            icon: 0,
            user: this.props.user
        }

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
                    <h1>Create a category</h1>
                    <input type='text' value={this.state.name} onChange={this.update("name")} />
                    {this.props.icons.map(icon => (
                        <option value={this.state.icon} onChange={this.update("icon")}>{icon}</option>
                    ))}
                </form>
            </div>
        );
    }
}

export default CategoryForm;