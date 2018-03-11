import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CartPage from './../components/pages/CartPage';
import {
  removeGoodFromCart,
  changeGoodInCartAmount,
  fetchGoodsInCart
} from './../actions';

class CartPageContainer extends Component {
  static propTypes = {
    fetchGoodsInCart: PropTypes.func
  };

  componentDidMount() {
    this.props.fetchGoodsInCart();
  }

  render() {
    return <CartPage {...this.props} />;
  }
}

const mapStateToProps = state => ({
  goods: state.goodsInCart.goods,
  price: state.goodsInCart.totalPrice
});

export default connect(mapStateToProps, {
  removeGoodFromCart,
  changeGoodInCartAmount,
  fetchGoodsInCart
})(CartPageContainer);
