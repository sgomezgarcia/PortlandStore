import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import header from '../../components/header';
import { filterByCategory } from '../../actions/products/products';

const mapStateToProps = ({ general }) => ({
  categories: general.categories,
});

const mapDispatchToProps = (dispatch) => ({ // acciones
  ...bindActionCreators({
    filterByCategory
  }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(header);
