import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import footer from '../../components/footer';


const mapStateToProps = ({ general }) => ({
  user: general.user,
});

const mapDispatchToProps = (dispatch) => ({ //acciones
  ...bindActionCreators({
  }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(footer);
