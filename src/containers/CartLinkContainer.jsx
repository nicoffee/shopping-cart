import { connect } from 'react-redux';
import CartLink from './../components/CartLink';

const mapStateToProps = state => ({
  goodsInCartCount: state.goodsInCart.goods.length
});

const CartPageContainer = connect(mapStateToProps)(CartLink);

export default CartPageContainer;
