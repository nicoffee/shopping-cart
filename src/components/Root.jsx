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
    exact: true
  },
  {
    path: '/monitors',
    fetchData: 'monitors'
  },
  {
    path: '/cases',
    fetchData: 'cases'
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
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            fetchData={route.fetchData}
            render={props => route.component || <App {...route} />}
          />
        ))}
      </React.Fragment>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root
