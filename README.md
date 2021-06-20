# Introduction
Moneybuddy is a website designed to keep track of users' expenses, and income. The website supports many features to help users to manage money and achieve financial goals. Users can view the reports to have better understanding of their spending habits. Users gain points every time they record expenses. The points can be used to exchange for icon to customize expense categories.

# Technologies
* MongoDB
* ReactJs
* NodeJS
* ExpressJS

# Features

## Transaction

* Record a transaction with category, amount, description, and seleted date. A Transaction is either income or expense. 
* View all transacations by the users with date, amount, category.

## View Report

Users can view the report which includes a pie chart. The pie chart shows the percentage of expenses of each category. 
User can also view the total expense of each category.

```

# Converting transaction data from the backend into "data" and "label" that ReChart library can understand.
const expenses = this.props.transactions.filter(
  (tx) => tx.type === "expense"
);
let categories = {};
let sum = 0;
expenses.forEach((ex) => {
  if (categories[ex["category"]]) {
    categories[ex["category"]] += ex["amount"];
  } else {
    categories[ex["category"]] = ex["amount"];
  }
  sum += ex["amount"];
});

const data = [];
Object.keys(categories).forEach((cat, i) => {
  const elm = {
    name: cat,
    value: (categories[cat] / sum).toFixed(2) * 100,
  };
  data.push(elm);
});
const colors = getColors(data.length);
const label = ({ value, index }) => {
  return data[index].name + " " + value + "%";
};

# Use ReChart library to display Pie chart.
<ResponsiveContainer width="100%" height="100%">
  <PieChart width={400} height={400}>
    <Pie data={data} dataKey="value" cx="35%" cy="40%" innerRadius={110}
                outerRadius={220} fill="#82ca9d" label={label}>
    {colors.map((color, i) => (
      <Cell fill={color} key={i} />
    ))}
    </Pie>
  </PieChart>
</ResponsiveContainer>
```

## Icon Shop
An icon is for customize category; when user create a category, it is assoicated with a icon. Each users have default icons, and in icon shop, they can unlock new icon using their points.
* Users get a point when first time each day.
* Users unlock a new icon with 5 points.

```
  purchase(icon) {
    if (this.props.currentUser.point < 5) {
      <h3> Sorry, no enought points.</h3>;
    } else {
      this.props
        .purchasePoint(icon)
        .then(() => this.props.updatePoints(this.props.currentUser.point - 5));
      this.setState({ showup: false ,showCreateSuccess: true  });
    }
  }
  checkIcon(e, i) {
    e.preventDefault();

    if (!this.props.icons.includes(i + 7)) {
      this.setState({
        showup: true,
        icon: i + 7,
      });
    }
  }
```

## Category
* Users can customize their category with unlocked icons.
* Users can use the category when entering their transactions.

## Comming soon
* User can viewing all transaction in period of time.
* User can delete category.
* User can delete and edit transaction.
* In the report, User can select a range of date, compare incomes and expenses, and a spending trend by month.


