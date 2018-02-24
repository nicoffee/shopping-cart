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
        {Object.keys(goods).map(id => (
          <AddedGood
            id={goods[id].id}
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
    );
  }
}

export default injectSheet(styles)(GoodsList);
