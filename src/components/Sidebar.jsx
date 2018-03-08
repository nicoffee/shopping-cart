import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const styles = {
  sidebar: {
    width: '200px',
    minWidth: '200px',
    marginRight: '30px'
  }
};

const Sidebar = ({ classes }) => (
  <div className={classes.sidebar}>
    <div />
  </div>
);

Sidebar.propTypes = {
  classes: PropTypes.object
};

export default injectSheet(styles)(Sidebar);
