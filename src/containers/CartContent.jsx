import { connect } from 'react-redux';
import CartPage from './../components/pages/CartPage';
import { removeGoodFromCart, increaseGoodInCartAmount } from './../actions';

const mapStateToProps = state => ({
  allIds: state.goodsInCart.allIds,
  byId: state.goodsInCart.byId.goods,
  price: state.goodsInCart.byId.totalPrice
});

const CartContent = connect(mapStateToProps, {
  removeGoodFromCart,
  increaseGoodInCartAmount
})(CartPage);

export default CartContent;
