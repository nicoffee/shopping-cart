import React from 'react'
import GoodsContainer from './../components/GoodsContainer'
import MenuAppBar from './MenuAppBar'
import Sidebar from './Sidebar'

const App = () => [
  <MenuAppBar key="MenuAppBar" />,
  <GoodsContainer key="GoodsContainer" />,
  <Sidebar key="Sidebar" />
]

export default App
