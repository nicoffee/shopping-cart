import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'

import { addGoodInCart, removeGoodFromCart } from '../actions'
import { getVisibleGoods, getIsFetching } from '../reducers/goods'
import { fetchGoods, requestGoods } from './../actions'
import GoodsList from '../components/GoodsList'

class VisibleGoodsList extends Component {
  static get propTypes() {
    return {
      filter: PropTypes.string,
      fetchGoods: PropTypes.func
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData()
    }
  }

  fetchData() {
    const { filter, requestGoods, fetchGoods } = this.props
    requestGoods(filter)
    fetchGoods(filter)
  }

  render() {
    const { goods, isFetching } = this.props

    if (isFetching && !goods.length) {
      return <p>Loading...</p>
    }

    return <GoodsList goods={goods} {...this.props} />
  }
}

const mapStateToProps = (state, { match }) => {
  const filter = match.params.filter || 'all'
  return {
    goods: getVisibleGoods(state, filter),
    isFetching: getIsFetching(state, filter),
    filter
  }
}

VisibleGoodsList = withRouter(
  connect(mapStateToProps, {
    onAddGoodClick: addGoodInCart,
    onRemoveGoodClick: removeGoodFromCart,
    fetchGoods,
    requestGoods
  })(VisibleGoodsList)
)

export default VisibleGoodsList
