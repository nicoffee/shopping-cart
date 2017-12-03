import React from 'react'
import PropTypes from 'prop-types'

import Good from './Good'

const GoodsList = ({ goods, onAddGoodClick }) =>
  goods.goods &&
  Object.keys(goods.goods).map(category => (
    <div style={{ display: 'flex' }} key={category}>
      <h1>{category}</h1>
      {goods.goods[category].map((good, idx) => (
        <Good
          img={good.img}
          name={good.name}
          vendor={good.vendor}
          price={good.price}
          rating={good.rating}
          vendor_code={good.vendor_code}
          key={idx}
          onClick={() => onAddGoodClick(good)}
        />
      ))}
    </div>
  ))

GoodsList.propTypes = {
  goods: PropTypes.object.isRequired,
  onAddGoodClick: PropTypes.func.isRequired
}

export default GoodsList
