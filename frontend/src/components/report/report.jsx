import React, { PureComponent }from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";


const COLORS = [
  "#134DA8",
  "#F5AF2C",
  "#879914",
  "#56069C",
  "#EBE5C1",
  "#B57907",
  "#A16322",
  "#6281E6",
  "#ED8C26",
  "#A69D50",
];
function getColors(n) {
    const r = [];
    for (let i = 0; i < n; i++)
      r[i] = COLORS[i%10]
    return r;
}

class Report extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showpop: false,
      alreadyshow: false,
      datepop: false,
      starDate: "",
      endDate: "",
    };
    this.update = this.update.bind(this)
    this.datePop= this.datePop.bind(this)
  }
  update(field) {
    return (e) => {
      return this.setState({
        [field]: e.currentTarget.value,
      });
    };
  }

  datePop() {
    if (this.state.datepop) {
      return(
      <div>
        <label>
          Start date:
          <input
            type="date"
            value={this.state.starDate}
            onChange={this.update("starDate")}
          />
        </label>
        <label>
          End Date:
          <input
            type="date"
            value={this.state.endDate}
            onChange={this.update("endDate")}
          />
        </label>
        <button onClick={(e)=> {
          this.setState({datepop: false})
        }}
        >Submit</button>
        <button onClick={(e)=> {
          this.setState({datepop: false})
        }}>Cancel</button>
      </div>)
    }else{
      return ""
    }
  }



  componentDidMount() {
    this.props.fetchTransactions();
  }

  render() {
    if (this.props.transactions.length === 0) {
      return "No transactions";
    }

    let expenses = this.props.transactions.filter(
      (tx) => tx.type === "expense"
    );


    if (this.state.endDate!=="" && this.state.starDate !== ""){
       expenses = expenses.filter((ex) => {
      return new Date(ex.date) >= new Date(this.state.starDate) && new Date(ex.date) <= new Date(this.state.endDate);
    });
  } 

    let categories = {};
    let categoryNames = [];
    let sum = 0;
    expenses.forEach((ex) => {
      if (categories[ex["category"]]) {
        categories[ex["category"]] += ex["amount"];
      } else {
        categoryNames.push(ex["category"]);
        categories[ex["category"]] = ex["amount"];
      }
      sum += ex["amount"];
    });

    const data = [];
    categoryNames.forEach((cat, i) => {
      const elm = {
        name: cat,
        value: (categories[cat] / sum).toFixed(4) * 100,
      };
      data.push(elm);
    });
    const colors = getColors(data.length);
    const label = ({ value, index }) => {
      return data[index].name + " " + value + "%";
    };

    return (
      <div className="report">
        <div>
          <button onClick={(e)=>{
            this.setState({datepop: true})
          }}>Filter Date</button>
        </div>
        {this.datePop()}
        <div className="pie-chart">
          <ResponsiveContainer width="50%" height="100%">
            <PieChart width={400} height={400}>
              <Pie
                isAnimationActive={false}
                data={data}
                dataKey="value"
                // cx="35%"
                // cy="40%"
                innerRadius={110}
                outerRadius={220}
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
