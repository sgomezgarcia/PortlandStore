import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import header from '../../components/header';


const mapStateToProps = ({ general }) => ({
  categories: general.categories,
});

const mapDispatchToProps = (dispatch) => ({ // acciones
  ...bindActionCreators({
  }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(header);
