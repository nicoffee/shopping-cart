import { connect } from 'react-redux';
import CartPage from './../components/pages/CartPage';
import { removeGoodFromCart, increaseGoodInCartAmount } from './../actions';

const mapStateToProps = state => ({
  goods: state.goodsInCart.goods,
  price: state.goodsInCart.totalPrice
});

const CartPageContainer = connect(mapStateToProps, {
  removeGoodFromCart,
  increaseGoodInCartAmount
})(CartPage);

export default CartPageContainer;
