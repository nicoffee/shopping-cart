import React from 'react'
import GoodsContainer from './../components/GoodsContainer'
import CartContent from './../containers/CartContent'
import MenuAppBar from './MenuAppBar'
import Sidebar from './Sidebar'

const App = () => [
  <MenuAppBar key="MenuAppBar" />,
  <CartContent key="CartContent" />,
  <GoodsContainer key="GoodsContainer" />,
  <Sidebar key="Sidebar" />
]

export default App
