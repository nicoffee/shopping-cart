import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'

import { addGoodInCart, removeGoodFromCart } from './../actions'
import {
  getVisibleGoods,
  getErrorMessage,
  getIsFetching
} from './../reducers/goods'
import { fetchGoods } from './../actions'
import GoodsList from './../components/GoodsList'
import FetchError from './../components/FetchError'

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
    const { filter, fetchGoods } = this.props
    fetchGoods(filter)
  }

  render() {
    const { isFetching, errorMessage, goods } = this.props

    if (isFetching && !goods.length) {
      return <p>Loading...</p>
    }

    if (errorMessage && !goods.length) {
      return (
        <FetchError message={errorMessage} onRetry={() => this.fetchData()} />
      )
    }

    return <GoodsList goods={goods} {...this.props} />
  }
}

const mapStateToProps = (state, { match }) => {
  const filter = match.params.filter || 'all'
  return {
    isFetching: getIsFetching(state, filter),
    errorMessage: getErrorMessage(state, filter),
    goods: getVisibleGoods(state, filter),
    filter
  }
}

VisibleGoodsList.propTypes = {
  filter: PropTypes.string,
  fetchGoods: PropTypes.func,
  isFetching: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  goods: PropTypes.array
}

export default withRouter(
  connect(mapStateToProps, {
    onAddGoodClick: addGoodInCart,
    onRemoveGoodClick: removeGoodFromCart,
    fetchGoods
  })(VisibleGoodsList)
)
