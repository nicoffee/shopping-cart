import React from 'react'
import { withStyles } from 'material-ui/styles'
import VisibleGoodsList from './../containers/VisibleGoodsList'
import Sidebar from './Sidebar'

const styles = {
  inner: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 20
  }
}

const Content = ({ classes }) => (
  <div className={classes.inner}>
    <Sidebar />
    <VisibleGoodsList />
  </div>
)

export default withStyles(styles)(Content)
