import React from 'react'
import { withRouter } from 'react-router'
import Content from './Content'

const App = props => (
  <React.Fragment>
    <Content {...props} />
  </React.Fragment>
)

export default App
