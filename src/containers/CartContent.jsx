import { connect } from 'react-redux';
import CartPage from './../components/pages/CartPage';
import { removeGoodFromCart } from './../actions';

const mapStateToProps = state => ({
  allIds: state.goodsInCart.allIds,
  byId: state.goodsInCart.byId.goods,
  price: state.goodsInCart.byId.totalPrice
});

const CartContent = connect(mapStateToProps, { removeGoodFromCart })(CartPage);

export default CartContent;
