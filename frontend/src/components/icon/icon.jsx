import React from 'react';
import {IconsList} from './icon_list';
import {Link} from 'react-router-dom'

class Icon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showup: false,
      icon: 0
    };
    this.popup = this.popup.bind(this);
    this.purchase = this.purchase.bind(this);
    this.checkIcon = this.checkIcon.bind(this);
  }

  // componentDidMount() {
  //   window.addEventListener("click", () => {
  //     this.setState({ showup: false});
  //   });
  // }

  popup() {
    if (!this.state.showup) {
      return null;
    } else {
      return (
        <div className="pop-up">
          <h1>Redeem Icons?</h1>
          <div>
            <button
              style={{ width: "100px" }}
              onClick={(e) => {
                debugger;
                this.purchase(this.state.icon);
              }}
            >
              Yes
            </button>
            <Link to="/report">
              <button style={{ width: "100px" }}>No</button>
            </Link>
          </div>
        </div>
      );
    }
  }
  purchase(icon) {

    if (this.props.currentUser.point < 5) {
      <h3> Sorry, no enought points.</h3>;
    } else {
      this.props.purchasePoint(icon).then(
        this.props.updatePoints(this.props.currentUser.point - 5)
      )
    }
  }
  checkIcon(e, i) {

    if (!this.props.icons.includes(i+1)) {
      this.setState({ 
        showup: true,
        icon: i+1
       });
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
        {this.popup()}
        {newIconsList.map((ele, i) => {
          return (
            <div
              onClick={(e) => this.checkIcon(e, i)}
              // data-key={i + 1}
              className={this.switchClass(i + 1)}
              key={i + 2}
            >
              {ele}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Icon;