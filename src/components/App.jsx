import React from 'react'
import AppBar from 'material-ui/AppBar'

import VisibleGoodsList from './../containers/VisibleGoodsList'
import CartContent from './../containers/CartContent'
import Sidebar from './Sidebar'

const App = () => [
  <AppBar key="AppBar">
    <h1>Shop</h1>
  </AppBar>,
  <CartContent key="CartContent" />,
  <VisibleGoodsList key="VisibleGoodsList" />,
  <Sidebar key="Sidebar" />
]

export default App
