import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import CartPage from './CartPage'
import App from './App'

const Root = ({store}) => (
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path="/" component={App}/>
                <Route path="/cart" component={CartPage}/>
            </div>
        </Router>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired
};

export default Root;