import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import CartTable from './../CartTable';

const styles = {
  emptyView: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '150px'
  }
};

class CartPage extends Component {
  static propTypes = {
    classes: PropTypes.object,
    goods: PropTypes.array,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    removeGoodFromCart: PropTypes.func,
    changeGoodInCartAmount: PropTypes.func
  };

  state = {
    inputValue: null
  };

  handleInputBlur = id =>
    this.props.changeGoodInCartAmount(
      id,
      Number.parseInt(this.state.inputValue)
    );

  handleInputChange = e => this.setState({ inputValue: e.target.value });

  render() {
    const {
      classes,
      goods,
      price,
      removeGoodFromCart,
      changeGoodInCartAmount
    } = this.props;

    return (
      <div>
        {goods.length ? (
          <div>
            <CartTable
              goods={goods}
              removeGoodFromCart={removeGoodFromCart}
              changeGoodInCartAmount={changeGoodInCartAmount}
            />
            <h2>Price: ${price}</h2>
          </div>
        ) : (
          <div className={classes.emptyView}>
            <Typography variant="display1" gutterBottom>
              No items in cart
            </Typography>
            <Link to="/">Back to the store</Link>
          </div>
        )}
      </div>
    );
  }
}

export default injectSheet(styles)(CartPage);
