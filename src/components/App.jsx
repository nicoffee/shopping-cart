import React from 'react'
import VisibleGoodsList from './../containers/VisibleGoodsList'
import CartContent from './../containers/CartContent'
import Sidebar from './Sidebar'

const App = () => [
  <CartContent key="CartContent" />,
  <VisibleGoodsList key="VisibleGoodsList" />,
  <Sidebar key="Sidebar" />
]

export default App
