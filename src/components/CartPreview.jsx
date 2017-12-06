import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const goodsList = goods => {
  return <div>test</div>
  // goods.array.map((item, idx) => {
  //   return <li key={idx}>{item.name}</li>
  // })
}

const CartPreview = props => (
  <div>
    Товаров в корзине: {props.goodsInCart.length}
    <br />
    Товары:
    <ul>{goodsList(props.goodsInCart)}</ul>
    Сумма: {props.goodsInCart.totalPrice}
    <Link to="/cart">View Cart</Link>
  </div>
)

CartPreview.propTypes = {
  goodsInCart: PropTypes.object
}

export default CartPreview
