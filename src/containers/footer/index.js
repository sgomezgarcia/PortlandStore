import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import footer from '../../components/footer';
import { getAllProducts, setCart } from '../../actions/products/products';
import { createOrders } from '../../actions/users/users';


const mapStateToProps = ({ general, product }) => ({
  user: general.user,
  products: product.products,
  userCart: general.userCart,
  userFavorites: general.userFavorites
});

const mapDispatchToProps = (dispatch) => ({ // acciones
  ...bindActionCreators({
    getAllProducts,
    setCart,
    createOrders
  }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(footer);
