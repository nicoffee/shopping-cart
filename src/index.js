import React from 'react'
import { render } from 'react-dom'
import configureStore from './store/configureStore'
import Root from './components/Root'
import './index.css'

const store = configureStore()

console.log('store', store)

render(<Root store={store} />, document.getElementById('root'))
