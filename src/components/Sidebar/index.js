import React from 'react'
import { connect } from 'react-redux'
import Button from 'material-ui/Button'
import FilterLink from './../../containers/FilterLink'

const Sidebar = () => (
  <div>
    <FilterLink filter="SHOW_ALL">
      <Button>Show All</Button>
    </FilterLink>
    <FilterLink filter="SHOW_MONITORS">
      <Button>Show Monitors</Button>
    </FilterLink>
    <FilterLink filter="SHOW_CASES">
      <Button>Show Cases</Button>
    </FilterLink>
  </div>
)

const mapStateToProps = state => ({ state })

export default connect(mapStateToProps)(Sidebar)
