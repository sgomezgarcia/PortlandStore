import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MyOrdersScreen from '../../screens/MyOrdersScreen';

const mapStateToProps = ({ general }) => ({
  userOrders: general.userOrders,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({
  }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyOrdersScreen);
