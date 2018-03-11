import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import Rating from './../Rating';

const styles = {
  div: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '150px'
  }
};

class GoodDetailsPage extends Component {
  static propTypes = {
    byId: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
    classes: PropTypes.object
  };

  render() {
    const { classes, byId, match } = this.props;
    const goodDetails = byId[match.params.id];
    const { name, rating, img } = goodDetails;

    return (
      <div className={classes.div}>
        <h1>Good details</h1>
        <img src={img} />
        <h2>{name}</h2>
        <Rating rating={rating} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  byId: state.goods.byId
});

export default withRouter(
  connect(mapStateToProps)(injectSheet(styles)(GoodDetailsPage))
);
