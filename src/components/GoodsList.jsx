import React, { Component } from 'react'
import { array, func } from 'prop-types'
import Good from './Good'
import styles from './../styles/components/goods-list.css'

class GoodsList extends Component {
  static propTypes = {
    goods: array.isRequired,
    onAddGoodClick: func.isRequired
  }

  render() {
    const { goods, onAddGoodClick } = this.props

    return (
      <div className={styles.inner}>
        {Object.keys(goods).map(id => (
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
        ))}
      </div>
    )
  }
}

export default GoodsList
