import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ProductsScreen from '../../screens/ProductsScreen';

import { addToCart, getAllProducts } from '../../actions/products/products';

// pass redux state to component
const mapStateToProps = ({ product }) => ({
  loading: product.loading,
  products: product.products,
});

// pass actions to component
const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({
    getAllProducts,
    addToCart,
  }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductsScreen);
