import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import CartLinkContainer from './../containers/CartLinkContainer';
import FilterLink from './../containers/FilterLink';
import screenIcon from './../images/screen.svg';
import caseIcon from './../images/case.svg';
import graphicsCardIcon from './../images/graphics-card.svg';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0 20px'
  },

  divider: {
    width: '100%'
  },

  inner: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1100px',
    width: '100%'
  },

  categories: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    maxWidth: '1100px',
    width: '100%',

    '& img': {
      width: '25px',
      height: '25px',
      marginRight: '10px'
    },

    '& $a': {
      display: 'flex',
      alignItems: 'center',
      marginRight: '20px',
      textDecoration: 'none',
      color: 'black'
    }
  },

  icon: {
    width: '20px',
    height: '20px',
    marginRight: '5px',

    '& svg': {
      width: '20px',
      height: '20px'
    }
  },

  'monitorsIcon casesIcon videocardsIcon': {
    width: '30px',
    height: '30px',
    marginRight: '10px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  }
};

const Header = ({ classes }) => (
  <AppBar className={classes.container} position="static">
    <Toolbar className={classes.inner}>
      <Typography type="title">
        <Link to="/">Computer Shop</Link>
      </Typography>
      <CartLinkContainer />
    </Toolbar>
    <Divider className={classes.divider} />
    <Toolbar className={classes.categories}>
      <FilterLink filter="monitors">
        <img src={screenIcon} />
        Monitors
      </FilterLink>
      <FilterLink filter="cases">
        <img src={caseIcon} />
        Cases
      </FilterLink>
      <FilterLink filter="videocards">
        <img src={graphicsCardIcon} />
        Videocards
      </FilterLink>
    </Toolbar>
  </AppBar>
);

Header.propTypes = {
  classes: PropTypes.object
};

export default injectSheet(styles)(Header);
