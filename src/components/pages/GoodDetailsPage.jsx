import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import Rating from './../Rating';

class GoodDetailsPage extends Component {
  static propTypes = {
    byId: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired
  };

  render() {
    const { byId, match } = this.props;
    const goodDetails = byId[match.params.id];
    const { name, rating } = goodDetails;

    return (
      <div>
        <h1>Good details</h1>
        <h2>{name}</h2>
        <Rating rating={rating} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  byId: state.goods.byId
});

export default withRouter(connect(mapStateToProps)(GoodDetailsPage));
