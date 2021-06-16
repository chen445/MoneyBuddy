import React from "react";
import { ResponsivePie } from '@nivo/pie';
import { ResponsiveBar } from "@nivo/bar";

function getColors(n) {
    return ["hsl(294, 70%, 50%)"];
}

class Report extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchAllTransactions();
    }

    render() {
        if (this.props.transactions.length === 0) {
            return "nothing to show"
        }

        const expenses = this.props.transactions.filter((tx) => tx.type === "expense");
        const categories = {};
        const sum = 0;
        expenses.forEach(ex => {
            if (categories[ex["categoryName"]]) {
                categories[ex["categoryName"]] += ex["amount"];
            } else {
                categories[ex["categoryName"]] = ex["amount"];
            }
            sum += ex["amount"];
        });

        const colors = getColors(Object.keys(categories).length);

        data = []
        fill = []
        Object.keys(categories).forEach((cat, i) => {
            const elm = {
              id: cat,
              label: cat,
              value: categories[cat] / sum,
              color: colors[i]
            };
            data.push(elm)

            const match = {
              match: {
                id: cat,
              },
              id: "line"
            };
            fill.push(match);
        });

    return (
      <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.55}
        padAngle={2}
        activeOuterRadiusOffset={8}
        borderWidth={2}
        borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2.7]] }}
        defs={[
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={fill}
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: 0,
            translateY: 56,
            itemsSpacing: 0,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: "#999",
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000",
                },
              },
            ],
          },
        ]}
      />
    );
    }
}

export default Report;
