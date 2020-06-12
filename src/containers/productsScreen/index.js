import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ProductsScreen from '../../screens/ProductsScreen';

import { addToCart, getAllProducts, favoriteProducts } from '../../actions/products/products';

// pass redux state to component
const mapStateToProps = ({ general, product }) => ({
  loading: product.loading,
  products: product.filteredProducts,
  userFavorites: general.userFavorites,
  user: general.user
});

// pass actions to component
const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({
    getAllProducts,
    favoriteProducts,
    addToCart,
  }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductsScreen);
