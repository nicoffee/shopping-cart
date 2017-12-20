import React from 'react'
import { connect } from 'react-redux'
import Button from 'material-ui/Button'
import Drawer from 'material-ui/Drawer'
import List from 'material-ui/List'
import Divider from 'material-ui/Divider'
import { withStyles } from 'material-ui/styles'
import FilterLink from './../containers/FilterLink'

const styles = {
  sidebar: {
    position: 'static'
  }
}

const Sidebar = ({ classes }) => (
  <Drawer
    type="permanent"
    classes={{
      paper: classes.sidebar
    }}>
    <div />
    <Divider />
    <List>
      <FilterLink filter="monitors">
        <Button>Show Monitors</Button>
      </FilterLink>
      <FilterLink filter="cases">
        <Button>Show Cases</Button>
      </FilterLink>
    </List>
    <Divider />
    <List>123</List>
  </Drawer>
)

const mapStateToProps = state => ({ state })

export default connect(mapStateToProps)(withStyles(styles)(Sidebar))
