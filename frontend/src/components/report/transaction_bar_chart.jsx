import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const barColors = ["crimson", "green"];

export default function TransactionsBarChart({ transactions }) {
  let income = transactions.filter((tx) => tx.type === "income");
  let expenses = transactions.filter((tx) => tx.type === "expense");

 
  let incomeSum = 0.;
  income.forEach((inc) => {
    incomeSum += inc["amount"];
  });

  let expenseSum = 0;
  expenses.forEach((exp) => {
    expenseSum += exp["amount"];
  });

 let balance = incomeSum - expenseSum;
  const data = [
    {
      name: "Income",
      amount: incomeSum,
    },
    {
      name: "Expense",
      amount: expenseSum,
    },
  ];

  return (
    <div>
      <div className="bar-chart" width={"600px"} height={"300px"}>
        <ResponsiveContainer>
          <BarChart
            width={800}
            height={400}
            data={data}
            margin={{
              top: 20,
              right: 50,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis dataKey="name" />

            <Tooltip
              cursor={{ fill: "transparent", width: 200 }}
              width={60}
            //   position={{ y: -100 }}
              coordinate={{ x: 100, y: 140 }}
            />
            <Bar dataKey="amount" barSize={70}>
              {data.map((entry, index) => (
                <Cell
                  cursor="pointer"
                  fill={barColors[index]}
                  key={`cell-${index}`}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div>
        <h3>Balance: ${balance}</h3>
      </div>
    </div>
  );
}
