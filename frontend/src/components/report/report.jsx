import React, { PureComponent }from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import {BiCoin} from 'react-icons/bi'

const COLORS = [
  "#1AA12E",
  "#8755ED",
  "#1A85A1",
  "#A16322",
  "#ED558A",
  "#3EED58",
  "#EDDD26",
  "#ED8C26",
  "#A69D50",
  "#71ACF0",
];
function getColors(n) {
    const r = [];
    for (let i = 0; i < n; i++)
      r[i] = COLORS[i%10]
    return r;
}

class Report extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          showpop: false,
          alreadyshow: false,
        }
        // this.popup = this.popup.bind(this);
    }

    // popup(){
    //   if (!this.state.showpop){
    //     return null;
    //   }else{
    //     return(
    //       <div className="pop-up">
    //           <h3>Welcome, You earned 1 point! <BiCoin color={"gold"}/></h3>
    //       </div>
    //     )
    //   }
    // }


    // componentDidMount(){
    //     this.props.fetchAllTransactions();
    // }
    // componentDidMount(){
    // if (this.props.currentUser.receivePoints && !this.state.alreadyshow){
    //     this.setState({ showpop: true }); 
    //     this.setState({ alreadyshow: true }); 
    // }}

    render() {
        
        if (this.props.transactions.length === 0) {
            return "No transactions"
        }

        const expenses = this.props.transactions.filter((tx) => tx.type === "expense");
        let categories = {};
        let sum = 0;
        expenses.forEach(ex => {
            if (categories[ex["categoryName"]]) {
                categories[ex["categoryName"]] += ex["amount"];
            } else {
                categories[ex["categoryName"]] = ex["amount"];
            }
            sum += ex["amount"];
        });

        const data = []
        Object.keys(categories).forEach((cat, i) => {
            const elm = {
              name: cat,
              value: (categories[cat] / sum)*100
            };
            data.push(elm)
        });
        const colors = getColors(data.length);
        const label=({value, index})=>{
            return (
               data[index].name + " " + value + "%"
              );
        }

        return (
          <div className="report">
            {/* {this.popup()} */}
            <div className="pie-chart">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart width={400} height={400}>
                  <Pie
                    data={data}
                    dataKey="value"
                    cx="30%"
                    cy="50%"
                    innerRadius={150}
                    outerRadius={300}
                    fill="#82ca9d"
                    label={label}
                  >
                    {colors.map((color, i) => (
                      <Cell fill={color} key={i} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              </div>
              <div className="legend">
                {Object.keys(categories).map((cat, i) => {
                  return (
                    <div>
                      <button style={{ backgroundColor: colors[i] }}></button>
                      {cat} ${categories[cat]}
                    </div>
                  );
                })}
              </div>
          </div>
        );
    }
}

export default Report;
