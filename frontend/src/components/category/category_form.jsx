import React from 'react';
import Select from "react-select";
import { IconsList } from "../icon/icon_list";

class CategoryForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            icon: this.props.icon,
            user: this.props.user.id,
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.action({
            name: this.state.name,
            icon: this.state.icon
        });
    }

    update(field) {
        return (e) =>
            this.setState({
                [field]: e.currentTarget.value,
            });
    }

    render() {
        return (
          <div className="category-form">
            <form onSubmit={this.handleClick}>
              <h1>Create a category</h1>
              <input
                type="text"
                value={this.state.name}
                onChange={this.update("name")}
              />
              <Select
                className="drop-down"
                value={this.IconsList}
                onChange={(selectedOption) =>
                  this.setState({
                    icon: selectedOption.value,
                  })
                }
                options={this.props.user.icons.map((icon) => {
                  return {
                    value: icon,
                    label: (
                      <div className="img-icon">{IconsList[icon - 1]}</div>
                    ),
                  };
                })}
              ></Select>
              <input type="submit" value="Submit"/>
            </form>
          </div>
        );
    }
}

export default CategoryForm;