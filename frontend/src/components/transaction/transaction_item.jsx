import React from 'react';
import { IconsList } from '../icon/icon_list';



class TransactionItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = { showDetail: false};
        this.newDate = this.newDate.bind(this)

    }
    newDate(date){
      date = new Date(date);
      return `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`;
    }

    render() {
      let detailButton;
      if (this.state.showDetail) {
        detailButton = (
          <button
            onClick={(e) => {
              {
                this.setState({ showDetail: false });
              }
            }}
          >
            -
          </button>
        );
      } else {
        detailButton = (
          <button
            onClick={(e) => {
              {
                this.setState({ showDetail: true });
              }
            }}
          >
            +
          </button>
        );
      }

      let transactionsDetail = this.state.showDetail
        ? this.props.description
        : "";
    
        return (
          <div className="detail-transaction">
            <div>
              <ul className="grid-container">
                <li className="grid-item">{this.newDate(this.props.date)}</li>
                <li className="grid-item">{this.props.type}</li>
                <li className="grid-item" style={{ width: "250px" }}>
                  {IconsList[this.props.icon - 1]
                    ? IconsList[this.props.icon - 1]
                    : null}
                  {this.props.category}
                </li>
                <li className="grid-item">${this.props.amount}</li>
                <li className="grid-item">
                  {this.props.description === "" ? "" : detailButton}
                </li>
                <li>{transactionsDetail}</li>
              </ul>
            </div>
          </div>
        );
    }
}

export default TransactionItem;