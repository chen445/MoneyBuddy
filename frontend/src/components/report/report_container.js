import { fetchAllTransactions } from "../";
import Report from './report';



//  [{
//    Type: “expense” (or “income”),
//    Category_name: “food”,
//    Icon: 2,
//    Amount: 1000,
//    Enter_date: “what is the format”   
// }]


const mapStateToProps = (state) => ({
  transactions: state.entities.transactions,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllTransactions: () => dispatch(fetchAllTransactions()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Report);
