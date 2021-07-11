import React from "react";
import { getColors } from "./utils";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer,Label } from "recharts";

export default function IncomePieChart({ transactions }) {
  let income = transactions.filter((tx) => tx.type === "income");

  let categories = {};
  let categoryNames = [];
  let sum = 0;
  income.forEach((inc) => {
    if (categories[inc["category"]]) {
      categories[inc["category"]] += inc["amount"];
    } else {
      categoryNames.push(inc["category"]);
      categories[inc["category"]] = inc["amount"];
    }
    sum += inc["amount"];
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
                {`Income`}
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
