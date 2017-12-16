import React from 'react'
import PropTypes from 'prop-types'
import VisibleGoodsList from './../containers/VisibleGoodsList'

const styles = {
  display: 'flex'
}

const GoodsListContainer = () => (
  <div style={styles}>
    <VisibleGoodsList />
  </div>
)

export default GoodsListContainer
