import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getOrdersByUser } from '../../actions/users/users';

import MyOrdersScreen from '../../screens/MyOrdersScreen';

const mapStateToProps = ({ general }) => ({
  userOrders: general.userOrders,
  user: general.user
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({
    getOrdersByUser
  }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyOrdersScreen);
