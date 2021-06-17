import Icon from "./icon";
import { connect } from "react-redux";
import {purchasePoint} from '../../actions/purchase_action'

const mapStateToProps = (state) => ({
  icons: state.icons,
});

const mapDispatchToProps = (dispatch) => ({
  purchasePoint: (icon_id) => dispatch(purchasePoint(icon_id)),

});

export default connect(mapStateToProps, mapDispatchToProps)(Icon);



