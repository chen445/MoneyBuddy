import { connect } from 'react-redux';
import CategoryForm from './category_form'
import { createCategory } from '../../actions/category_actions';

const mapStateToProps = (state) => {
    const icons = state.icons
    const user = state.currentUser
    return {
        name: "",
        icons: icons,
        user: user
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        action: (category) => dispatch(createCategory(category)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryForm);