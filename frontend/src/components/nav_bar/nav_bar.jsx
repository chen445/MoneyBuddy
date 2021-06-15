import React from 'react';
import {ImCalendar} from "react-icons/im";
import {BsBarChart} from 'react-icons/bs';
import {AiOutlineShop} from 'react-icons/ai'


class NavBar extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
      return (
        <div>
          <div>
            <ul>
               <li>
                    
               </li>
              <li>
                <a href=""><ImCalendar/><br />Today</a>
              </li>
              <li>
                  <a href=""><BsBarChart/><br/> Report</a>
              </li>
              <li>
                  <a href=""><AiOutlineShop/><br/>Icon Shop</a>
              </li>
              <li></li>
            </ul>
          </div>
          <div></div>
        </div>
      );
  }
}

export default NavBar

