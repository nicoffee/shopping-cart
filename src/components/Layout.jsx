import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import blueGrey from 'material-ui/colors/blueGrey';
import amber from 'material-ui/colors/amber';
import red from 'material-ui/colors/red';
import { withStyles } from 'material-ui/styles';
import HeaderContainer from './../containers/HeaderContainer';

const theme = createMuiTheme({
  palette: {
    primary: blueGrey,
    secondary: amber,
    error: red
  }
});

const styles = {
  paper: {
    width: '100%',
    maxWidth: '1100px'
  }
};

const Layout = ({ children, classes }) => (
  <MuiThemeProvider theme={theme}>
    <HeaderContainer />
    <Paper className={classes.paper}>{children}</Paper>
  </MuiThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.any.isRequired,
  classes: PropTypes.object
};

export default withStyles(styles)(Layout);
