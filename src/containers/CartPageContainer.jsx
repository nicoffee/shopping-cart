import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartPage from './../components/pages/CartPage';
import {
  removeGoodFromCart,
  changeGoodInCartAmount,
  fetchGoodsInCart
} from './../actions';

class CartPageContainer extends Component {
  componentDidMount() {
    this.fetchData();
  }
}

const mapStateToProps = state => ({
  goods: state.goodsInCart.goods,
  price: state.goodsInCart.totalPrice
});

const CartPageContainer = connect(mapStateToProps, {
  removeGoodFromCart,
  changeGoodInCartAmount,
  fetchGoodsInCart
})(CartPage);

export default CartPageContainer;
