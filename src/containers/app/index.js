import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Main from '../../screens/Main';

import { setUser } from '../../actions/users/users';

const mapStateToProps = ({ general }) => ({
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({
    setUser
  }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
