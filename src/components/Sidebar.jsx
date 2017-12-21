import React from 'react'
import { connect } from 'react-redux'
import Drawer from 'material-ui/Drawer'
import List from 'material-ui/List'
import Divider from 'material-ui/Divider'
import { withStyles } from 'material-ui/styles'

const styles = {
  sidebar: {
    position: 'static'
  }
}

const Sidebar = ({ classes }) => (
  <Drawer type="permanent" classes={{ paper: classes.sidebar }}>
    <Divider />
    <List />
  </Drawer>
)

const mapStateToProps = state => ({ state })

export default connect(mapStateToProps)(withStyles(styles)(Sidebar))
