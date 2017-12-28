import React from 'react'
import PropTypes from 'prop-types'

const CartPage = ({ allIds, byId, price }) => (
  <div>
    <h1>Cart</h1>
    <ul>{allIds.map((id, idx) => <li key={idx}>{byId[id].name}</li>)}</ul>
    <h2>Price: ${price}</h2>
  </div>
)

CartPage.propTypes = {
  goodsInCart: PropTypes.object,
  price: PropTypes.number
}

export default CartPage
