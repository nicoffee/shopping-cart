import React from 'react'
import {connect} from 'react-redux'
import FilterLink from './../../containers/FilterLink'

const Sidebar = () => (
    <div>
        <FilterLink filter="SHOW_ALL">Show All</FilterLink>
        <FilterLink filter="SHOW_MONITORS">Show Monitors</FilterLink>
        <FilterLink filter="SHOW_CASES">Show Cases</FilterLink>
    </div>
);

const mapStateToProps = (state) => ({state});

export default connect(mapStateToProps)(Sidebar)