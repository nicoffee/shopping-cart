import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import GoodDetailsPage from './pages/GoodDetailsPage';
import MainPage from './pages/MainPage';
import CategoryPage from './pages/CategoryPage';
import Layout from './Layout';
import CartPageContainer from './../containers/CartPageContainer';

const routes = [
  {
    path: '/',
    exact: true,
    filter: 'popular'
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
    component: CartPageContainer
  },
  {
    path: '/product/:id',
    component: GoodDetailsPage
  }
];

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Layout>
        {routes.map(
          (route, index) =>
            route.filter === 'popular' ? (
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
      </Layout>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
