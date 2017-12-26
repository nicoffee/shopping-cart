import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import App from './App'
import Header from './../containers/Header'
import CartContent from './../containers/CartContent'

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
    path: '/cart',
    component: CartContent
  }
]

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <React.Fragment>
        <Header />
        {routes.map(
          (route, index) =>
            route.filter ? (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                filter={route.filter}
                render={() => <App {...route} />}
              />
            ) : (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                filter={route.filter}
                component={route.component}
              />
            )
        )}
      </React.Fragment>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root
