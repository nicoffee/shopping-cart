import React from 'react'
import PropTypes from 'prop-types'
import Good from './Good'

const GoodsList = ({ goods, onAddGoodClick }) =>
  Object.keys(goods).map(id => (
    <Good
      img={goods[id].img}
      name={goods[id].name}
      vendor={goods[id].vendor}
      price={goods[id].price}
      rating={goods[id].rating}
      vendor_code={goods[id].vendor_code}
      key={id}
      onClick={() => onAddGoodClick(goods[id])}
    />
  ))

GoodsList.propTypes = {
  goods: PropTypes.array.isRequired,
  onAddGoodClick: PropTypes.func.isRequired
}

export default GoodsList
