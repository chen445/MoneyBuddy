import React from 'react';
import { IconsList } from '../icon/icon_list';



class TransactionItem extends React.Component {
    constructor(props) {
        super(props)
        
        this.newDate = this.newDate.bind(this)

    }
    newDate(date){
      date = new Date(date);
      return `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`;
    }

    render() {
        return (
          <div className="detail-transaction">
            <div>
              <ul>
                <li>{this.newDate(this.props.date)}</li>
                <li>{this.props.type}</li>

                <li>
                  {IconsList[this.props.icon - 1]
                    ? IconsList[this.props.icon - 1]
                    : null}{" "}
                  {this.props.category}
                </li>
                <li>{this.props.description}</li>
                <li>${this.props.amount}</li>
              </ul>
            </div>
          </div>
        );
    }
}

export default TransactionItem;