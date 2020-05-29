import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Main from '../../screens/Main';

import { setUser, getOrdersByUser } from '../../actions/users/users';
import { initApp } from '../../actions/general/general';

const mapStateToProps = ({ general }) => ({
  loading: general.loading
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({
    setUser,
    initApp,
    getOrdersByUser
  }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
