import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const CartPreview = props => (
  <div>
    Goods in cart: {props.goodsInCart.allIds.length}
    <br />
    Goods:
    <ul>
      {Object.keys(props.goodsInCart.byId.goods).map((key, index) => (
        <li key={index}>{props.goodsInCart.byId.goods[key].name}</li>
      ))}
    </ul>
    Total Product Value: {props.goodsInCart.byId.totalPrice}
    <Link to="/cart">View Cart</Link>
  </div>
)

CartPreview.propTypes = {
  goodsInCart: PropTypes.object
}

export default CartPreview
