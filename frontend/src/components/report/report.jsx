import React, { PureComponent }from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const COLORS = [
  "#1AA12E",
  "#8755ED",
  "#3EED58",
  "#ED8C26",
  "#A16322",
  "#1A85A1",
  "#ED558A",
  "#EDDD26",
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
    }

    // componentDidMount(){
    //     this.props.fetchAllTransactions();
    // }

    render() {
        if (this.props.transactions.length === 0) {
            return "nothing to show"
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
            return data[index].name + " "+ value+"%"
        }

        return (
          <div style={{ height: 1000, width: 1000 }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart width={400} height={400}>
                <Pie
                  data={data}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  innerRadius={75}
                  outerRadius={150}
                  fill="#82ca9d"
                  label = {label}
                >
                  {colors.map((color, i) => (
                    <Cell fill={color} key={i} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        );
    }
}

export default Report;
