import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import HomeScreen from '../../screens/HomeScreen';


const mapStateToProps = ({ general }) => ({
  loading: general.loading,
  user: general.user,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({
  }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);
