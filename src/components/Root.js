import React from 'react';
import { Provider } from 'react-redux'
import App from './../App'
import { Router, Route } from 'react-router'

const Root = ({store}) => (
  <Provider store={store}>
      <Router>
          <div>
              <Route path="/" componenet={App} />
          </div>
      </Router>
  </Provider>
);

export default Root;