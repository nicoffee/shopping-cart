import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const goodsList = goods => {
  console.log('goods!', goods)
  if (goods.length) {
    return goods.forEach((item, idx) => {
      console.log('item!', item)
      return <li key={idx}>{item.name}</li>
    })
  }
}

const CartPreview = props => {
  console.log('props!', props)
  return (
    <div>
      Товаров в корзине: {props.goodsInCart.byId.goods.length}
      <br />
      Товары:
      <ul>{goodsList(props.goodsInCart.byId.goods)}</ul>
      Сумма: {props.goodsInCart.byId.totalPrice}
      <Link to="/cart">View Cart</Link>
    </div>
  )
}

CartPreview.propTypes = {
  goodsInCart: PropTypes.object
}

export default CartPreview
