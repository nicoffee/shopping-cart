import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import axios from 'axios'

import { addGoodInCart, removeGoodFromCart } from '../actions'
import { getVisibleGoods } from '../reducers/goods'
import { receiveGoods } from './../actions'
import GoodsList from '../components/GoodsList'

class VisibleGoodsList extends Component {
  componentDidMount() {
    this.fetchData()
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData()
    }
  }

  fetchData() {
    console.log('this.props', this.props)
    const { filter, receiveGoods } = this.props
    axios
      .get('http://localhost:3000/goods')
      .then(response => {
        console.log('response', response)
        receiveGoods(filter, response)
      })
      .catch(error => console.log(error))
  }

  render() {
    return <GoodsList {...this.props} />
  }
}

const mapStateToProps = (state, { match }) => {
  const filter = match.params.filter || 'all'
  return {
    goods: getVisibleGoods(state, filter),
    filter
  }
}

VisibleGoodsList = withRouter(
  connect(mapStateToProps, {
    onAddGoodClick: addGoodInCart,
    onRemoveGoodClick: removeGoodFromCart,
    receiveGoods
  })(VisibleGoodsList)
)

export default VisibleGoodsList
