import React from 'react'
import PropTypes from 'prop-types'

import Good from './../Good'
import styles from './style.css'

const GoodsList = ({ goods, onAddGoodClick }) => (
  <div className={styles.container}>
    {goods.goods &&
      goods.map((good, idx) => (
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
)

GoodsList.propTypes = {
  goods: PropTypes.array.isRequired,
  onAddGoodClick: PropTypes.func.isRequired
}

export default GoodsList
