import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import IconButton from 'material-ui/IconButton';
import cartIcon from './../images/cart.svg';

const styles = {
  goodsCount: {
    position: 'absolute',
    right: '5px',
    bottom: '5px',
    display: 'flex',
    width: '20px',
    height: '20px',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: '14px',
    fontWeight: 'bold',
    backgroundColor: '#f1c40f',
    borderRadius: '50%'
  },

  cartIcon: {
    width: '25px',
    height: '25px'
  },

  cartIconButton: {
    position: 'relative'
  }
};

const CartLink = ({ classes, goodsInCartCount }) => (
  <Link to="/cart">
    <IconButton className={classes.cartIconButton}>
      <img className={classes.cartIcon} src={cartIcon} />
      <div className={classes.goodsCount}>
        <span>{goodsInCartCount}</span>
      </div>
    </IconButton>
  </Link>
);

CartLink.propTypes = {
  classes: PropTypes.object,
  goodsInCartCount: PropTypes.number
};

export default injectSheet(styles)(CartLink);
