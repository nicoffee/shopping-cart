import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const styles = {
  image: {
    width: '100px'
  },
  loader: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    border: '6px solid #f3f3f3',
    borderTop: '6px solid #3498db',
    borderRadius: '50%',
    width: '30px',
    height: '30px',
    animation: 'spin 2s linear infinite'
  },
  '@keyframes spin': {
    from: {
      transform: 'rotate(0deg)'
    },
    to: {
      transform: 'rotate(360deg)'
    }
  }
};

const Loader = ({ classes }) => <div className={classes.loader} />;

Loader.propTypes = {
  classes: PropTypes.object
};

export default injectSheet(styles)(Loader);
