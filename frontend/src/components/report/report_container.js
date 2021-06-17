import { fetchTrans } from "../../actions/transaction_actions";
import Report from "./report";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  //  transactions: state.entities.transactions,
  transactions: fakeTransactions,
  currentUser: state.session.user,
});

const mapDispatchToProps = (dispatch) => ({
  fetchTransactions: () => dispatch(fetchTrans()),
});

export default connect(mapStateToProps,mapDispatchToProps)(Report);
