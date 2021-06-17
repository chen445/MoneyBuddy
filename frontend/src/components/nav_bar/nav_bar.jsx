import React from 'react';
import {ImCalendar} from "react-icons/im";
import {BsBarChart} from 'react-icons/bs';
import {AiOutlineShop} from 'react-icons/ai'
import {GiCutDiamond} from 'react-icons/gi'
import {FaRegUserCircle} from 'react-icons/fa'
import { AiOutlineAppstoreAdd } from "react-icons/ai";

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
            <FaRegUserCircle size={40} />
            <h2>{this.props.currentUser.username}</h2>
          </div>
          <div className="point">
            <GiCutDiamond color={"lightblue"} size={40} />
            {this.props.currentUser.point}
          </div>
          <a href="">
            <ImCalendar size={35} />
            <br />
            <h2>Today</h2>
          </a>
          <a href="">
            <BsBarChart size={35} />
            <br />
            <h2>Report</h2>
          </a>
          <a href="">
            <AiOutlineShop size={35} />
            <br />
            <h2>Icon Shop</h2>
          </a>
         
          <a href="">
            <AiOutlineAppstoreAdd size={35}/> <br /> 
            <h2>Category</h2>
          </a>
          
          <button onClick={()=>this.props.signout()}>
            Log Out
          </button>
        </div>

      );
  }
}

export default NavBar

