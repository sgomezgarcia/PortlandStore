import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import HomeScreen from '../../screens/HomeScreen';

import { filterByGender } from '../../actions/products/products';


const mapStateToProps = ({ general }) => ({
  loading: general.loading,
  user: general.user,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({
    filterByGender
  }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);
