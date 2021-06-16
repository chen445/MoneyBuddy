import React from 'react';
import {ImCalendar} from "react-icons/im";
import {BsBarChart} from 'react-icons/bs';
import {AiOutlineShop} from 'react-icons/ai'
import {GiCutDiamond} from 'react-icons/gi'
import {FaRegUserCircle} from 'react-icons/fa'

class NavBar extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
      return (
        <div
          className="nav-bar-left"
          style={{ backgroundImage: `url(${window.homeimg}` }}
        >
          <div className="user">
            <FaRegUserCircle size={45} />
            <h2>{this.props.currentUser.username}</h2>
          </div>
          <div className="point">
            <GiCutDiamond color={"lightblue"} size={45} />
            {this.props.currentUser.point}
          </div>
          <a href="">
            <ImCalendar size={45} />
            <br />
            <h2>Today</h2>
          </a>
          <a href="">
            <BsBarChart size={45} />
            <br />
            <h2>Report</h2>
          </a>
          <a href="">
            <AiOutlineShop size={45} />
            <br />
            <h2>Icon Shop</h2>
          </a>
        </div>
      );
  }
}

export default NavBar

