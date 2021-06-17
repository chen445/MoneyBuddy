import React from 'react';
import {IconsList} from './icon_list';

class Icon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showup: false,
    };
    this.popup = this.popup.bind(this);
    this.purchase = this.purchase.bind(this);
    this.checkIcon = this.checkIcon.bind(this);
  }

  componentDidMount() {
    window.addEventListener("click", () => {
      this.setState({ showpop: false});
    });
  }

  popup() {
    if (!this.state.showpop) {
      return null;
    } else {
      return (
        <div className="pop-up">
          <h1>Redeem Icons?</h1>
          <div>
            <button
              onClick={(e) => this.purchase(e.target.getAttribute("data-key"))}
            >
              Yes
            </button>
            <button>No</button>
          </div>
        </div>
      );
    }
  }
  purchase(icon_id) {
    if (this.props.currentUser.points < 7) {
      <h3> Sorry, no enought points.</h3>;
    } else {
      this.props.purchasePoint(icon_id);
    }
  }
  checkIcon(e, i) {
    if (!this.props.currentUser.icons.includes(i+1)) {
      this.setState({ showup: true });
    }
  }

  switchClass(index){
    if (this.props.icons.includes(index+1)){
        return "icon-checked"
    }else{
       return  "icon-unchecked"
    }

  }

  render() {
    const newIconsList = IconsList.slice(6);
    return (
      <div>
        {newIconsList.map((icon, i) => {
          return (
            <div onClick={() => this.checkIcon(i)} key={i} data-key={i+1} className={this.switchClass(i+1)}>
              {icon}
            </div>
          );
        })}
        {this.popup()}
      </div>
    );
  }
}

export default Icon;