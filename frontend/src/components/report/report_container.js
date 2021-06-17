// import { fetchAllTransactions } from "../";
import Report from './report';
import { connect } from "react-redux";


//  [{
//    Type: “expense” (or “income”),
//    Category_name: “food”,
//    Icon: 2,
//    Amount: 1000,
//    Enter_date: “what is the format”   
// }]

const fakeTransactions = [
  {
    type: "expense",
    categoryName: "food",
    amount: 1000,
  },
  {
    type: "expense",
    categoryName: "food",
    amount: 200,
  },
  {
    type: "expense",
    categoryName: "shopping",
    amount: 900,
  },
  {
    type: "expense",
    categoryName: "travel",
    amount: 900,
  },
];

const mapStateToProps = (state) => ({
  //  transactions: state.entities.transactions,
  transactions: fakeTransactions,
});

// const mapDispatchToProps = (dispatch) => ({
//   fetchAllTransactions: () => dispatch(fetchAllTransactions()),
// });

export default connect(mapStateToProps)(Report);
