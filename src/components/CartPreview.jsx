import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const goodsList = goods => {
  // if (goods.forEach) {
  //   goods.forEach((item, idx) => {
  //     console.log('item!', item)
  //     return <li key={idx}>{item.name}</li>
  //   })
  // }
  return Object.keys(goods).forEach((key, index) => {
    console.log('goods[key]', goods[key])
    return <li>{`${goods[key].name}, ${goods[key].price}`}</li>
    // key: the name of the object key
    // index: the ordinal position of the key within the object
  })
}

const CartPreview = props => {
  console.log('props!', props)
  return (
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
}

CartPreview.propTypes = {
  goodsInCart: PropTypes.object
}

export default CartPreview
