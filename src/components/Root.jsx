import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import purple from 'material-ui/colors/purple'
import green from 'material-ui/colors/green'
import red from 'material-ui/colors/red'
import Header from './../containers/Header'
import CartContent from './../containers/CartContent'
import GoodDetails from './pages/GoodDetailsPage'
import MainPage from './pages/MainPage'

const theme = createMuiTheme({
  palette: {
    primary: purple, // Purple and green play nicely together.
    secondary: {
      ...green,
      A400: '#00e677'
    },
    error: red
  }
})

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
    path: '/product',
    component: GoodDetails
  }
]

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <MuiThemeProvider theme={theme}>
        <Header />
        {routes.map(
          (route, index) =>
            route.filter ? (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                filter={route.filter}
                render={() => <MainPage {...route} />}
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
      </MuiThemeProvider>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root
