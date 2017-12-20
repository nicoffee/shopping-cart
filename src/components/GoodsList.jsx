import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Good from './Good'

const styles = {
  inner: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1000px',
    width: '100%'
  }
}

@withStyles(styles)
class GoodsList extends Component {
  render() {
    const { goods, onAddGoodClick } = this.props

    return (
      <div className={this.props.classes.inner}>
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

GoodsList.propTypes = {
  goods: PropTypes.array.isRequired,
  onAddGoodClick: PropTypes.func.isRequired,
  classes: PropTypes.string
}

export default GoodsList
