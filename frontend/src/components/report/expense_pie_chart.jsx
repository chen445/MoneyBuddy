import React from "react";
import {getColors} from './utils'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer,Label } from "recharts";

export default function ExpensePieChart({ transactions }) {
  let expenses = transactions.filter((tx) => tx.type === "expense");

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

  let data = [];
  categoryNames.sort();
  categoryNames.forEach((cat, i) => {
    const elm = {
      name: cat,
      value: Math.round((categories[cat] / sum) * 10000) / 100,
    };
    data.push(elm);
  });

  const colors = getColors(data.length);
  const label = ({ value, index }) => {
    return data[index].name + " " + value + "%";
  };

  if (expenses.length === 0) {
      return (
        <div id="no-report">
          <h4>No Expense Report during this period of Time</h4>
        <div style={{width: "200px"}}>
        </div>
        </div>
      );
  }

  return (
    <div>
      <div className="pie-chart">
        <ResponsiveContainer width="50%" height="100%">
          <PieChart width={400} height={400} minAngle={20}>
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

              <Label width={30} position="center">
                {`Expense`}
              </Label>
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