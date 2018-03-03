import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { string, func, bool, array } from 'prop-types';
import { addGoodInCart, removeGoodFromCart } from './../actions';
import {
  getVisibleGoods,
  getErrorMessage,
  getIsFetching
} from './../reducers/goods';
import { getGoodsInCart } from './../reducers/goodsInCart';
import { fetchGoods, fetchGoodsInCart } from './../actions';
import GoodsList from './../components/GoodsList';
import FetchError from './../components/FetchError';
import Loader from './../components/Loader';

class GoodsListContainer extends Component {
  static propTypes = {
    filter: string,
    fetchGoods: func,
    fetchGoodsInCart: func,
    isFetching: bool.isRequired,
    errorMessage: string,
    goods: array
  };

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData();
    }
  }

  fetchData() {
    const { filter, fetchGoods, fetchGoodsInCart } = this.props;
    fetchGoods(filter);
    fetchGoodsInCart();
  }

  render() {
    const { isFetching, errorMessage, goods } = this.props;

    if (isFetching && !goods.length) {
      return <Loader />;
    }

    if (errorMessage && !goods.length) {
      return (
        <FetchError message={errorMessage} onRetry={() => this.fetchData()} />
      );
    }

    return <GoodsList goods={goods} {...this.props} />;
  }
}

const mapStateToProps = (state, ownProps) => ({
  isFetching: getIsFetching(state, ownProps.filter),
  errorMessage: getErrorMessage(state, ownProps.filter),
  goods: getVisibleGoods(state, ownProps.filter),
  goodsInCart: getGoodsInCart(state),
  filter: ownProps.filter
});

export default withRouter(
  connect(mapStateToProps, {
    onAddGoodClick: addGoodInCart,
    onRemoveGoodClick: removeGoodFromCart,
    fetchGoods,
    fetchGoodsInCart
  })(GoodsListContainer)
);
