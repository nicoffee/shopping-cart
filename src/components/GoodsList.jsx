import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import AddedGood from './../containers/AddedGood';

const styles = {
  goodsList: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  }
};

class GoodsList extends Component {
  static propTypes = {
    goods: PropTypes.array.isRequired,
    onAddGoodClick: PropTypes.func.isRequired,
    classes: PropTypes.object
  };

  render() {
    const { goods, onAddGoodClick, classes } = this.props;

    return (
      <div className={classes.goodsList}>
        {goods.map((good, index) => (
          <AddedGood
            id={good.id}
            img={good.img}
            name={good.name}
            vendor={good.vendor}
            price={good.price}
            rating={good.rating}
            vendor_code={good.vendor_code}
            key={index}
            onClick={() => onAddGoodClick(good)}
          />
        ))}
      </div>
    );
  }
}

export default injectSheet(styles)(GoodsList);
