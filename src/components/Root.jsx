import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import blueGrey from 'material-ui/colors/blueGrey';
import amber from 'material-ui/colors/amber';
import red from 'material-ui/colors/red';
import Header from './../containers/Header';
import CartContent from './../containers/CartContent';
import GoodDetailsPage from './pages/GoodDetailsPage';
import MainPage from './pages/MainPage';
import CategoryPage from './pages/CategoryPage';

const theme = createMuiTheme({
  palette: {
    primary: blueGrey,
    secondary: amber,
    error: red
  }
});

const routes = [
  {
    path: '/',
    exact: true,
    filter: 'all'
  },
  {
    path: '/monitors',
    filter: 'monitors'
  },
  {
    path: '/cases',
    filter: 'cases'
  },
  {
    path: '/videocards',
    filter: 'videocards'
  },
  {
    path: '/cart',
    component: CartContent
  },
  {
    path: '/product/:id',
    component: GoodDetailsPage
  }
];

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <MuiThemeProvider theme={theme}>
        <Header />
        {routes.map(
          (route, index) =>
            route.filter === 'all' ? (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                filter={route.filter}
                render={() => <MainPage {...route} />}
              />
            ) : route.filter ? (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                filter={route.filter}
                render={() => <CategoryPage {...route} />}
              />
            ) : (
              <Route
                key={index}
                path={route.path}
                component={route.component}
              />
            )
        )}
      </MuiThemeProvider>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
