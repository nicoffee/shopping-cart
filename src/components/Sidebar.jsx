import React from 'react'
import { connect } from 'react-redux'
import Button from 'material-ui/Button'

import FilterLink from './../containers/FilterLink'

const Sidebar = () => (
  <div>
    <FilterLink filter="monitors">
      <Button>Show Monitors</Button>
    </FilterLink>
    <FilterLink filter="cases">
      <Button>Show Cases</Button>
    </FilterLink>
  </div>
)

const mapStateToProps = state => ({ state })

export default connect(mapStateToProps)(Sidebar)
