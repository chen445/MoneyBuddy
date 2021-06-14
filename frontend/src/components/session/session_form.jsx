import React from 'react';
import {Link} from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.email,
      username: this.props.username,
      password: this.props.password,
      password2: this.props.password2,
    };

    this.handleClick = this.handleClick.bind(this);
    this.userDemo = this.userDemo.bind(this);
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

  errors(errorField) {
    return this.props.errors[errorField] ? (
      <ul>
        <li>{this.props.errors[errorField]}</li>
      </ul>
    ) : (
      ""
    );
  }

  errorClassName(errorField) {
    if (this.props.errors[errorField]) return "error";
    else return "";
  }

  userDemo(e) {
    const user = { email: "demouser@gmail.com", password: "123456" };
    this.props.demo(user);
  }

  render(){
        const usernameInput =
          this.props.username === undefined ? (
            ""
          ) : (
            <label>
              Username
              <br></br>
              <input
                type="text"
                className={this.errorClassName("username")}
                value={this.state.username}
                onChange={this.update("username")}
              />
              {this.errors("username")}
              <br />
              <br />
            </label>
          );
          const passwordInput =
            this.props.password2 === undefined ? (
              ""
            ) : (
              <label>
                Password2
                <input
                  type="password2"
                  value={this.state.password2}
                  className={this.errorClassName("password2")}
                  onChange={this.update("password2")}
                />
                {this.errors("password2")}
              </label>
            );

            const link = (
              <div className="sign-up-link">
                {this.props.displayLink.name} &nbsp;
                <Link
                  to={this.props.displayLink.link}
                  onClick={this.props.clearErrorAction}
                >
                  {this.props.displayLink.to}
                </Link>
              </div>
            );
    return (
      <div>
        <form onSubmit={this.handleClick}>
          <h1>{this.props.formType}</h1>
          {usernameInput}
          <label>
            Email
            <input
              type="text"
              value={this.state.email}
              className={this.errorClassName("email")}
              onChange={this.update("email")}
            />
          </label>
          {this.errors("email")}

          <label>
            Password
            <input
              type="password"
              value={this.state.password}
              className={this.errorClassName("password")}
              onChange={this.update("password")}
            />
          </label>
          {this.errors("password")}
          {passwordInput}
          <input type="submit" value={this.props.formType} />
        </form>

        {link}

        <button onClick={this.userDemo}>Demo User</button>
      </div>
    );
  }
}

export default SessionForm; 



