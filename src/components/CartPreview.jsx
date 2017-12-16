import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const CartPreview = props => (
  <div>
    Товаров в корзине: {props.goodsInCart.allIds.length}
    <br />
    Товары:
    <ul>
      {Object.keys(props.goodsInCart.byId.goods).map((key, index) => (
        <li key={index}>{props.goodsInCart.byId.goods[key].name}</li>
      ))}
    </ul>
    Сумма: {props.goodsInCart.byId.totalPrice}
    <Link to="/cart">View Cart</Link>
  </div>
)

CartPreview.propTypes = {
  goodsInCart: PropTypes.object
}

export default CartPreview
