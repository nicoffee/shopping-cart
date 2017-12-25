import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { string, func, bool, array } from 'prop-types'
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
  static propTypes = {
    filter: string,
    fetchGoods: func,
    isFetching: bool.isRequired,
    errorMessage: string,
    goods: array
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
    console.log('this.props', this.props)
    const { fetchData, fetchGoods } = this.props
    fetchGoods(fetchData)
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
  console.log('state', state)
  return {
    isFetching: getIsFetching(state, filter),
    errorMessage: getErrorMessage(state, filter),
    goods: getVisibleGoods(state, filter),
    filter
  }
}

export default withRouter(
  connect(mapStateToProps, {
    onAddGoodClick: addGoodInCart,
    onRemoveGoodClick: removeGoodFromCart,
    fetchGoods
  })(VisibleGoodsList)
)
