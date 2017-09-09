import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button'

import {setCategoryFilter} from './../../actions'

const Sidebar = props => (
    <div>
        <input type="radio"/>All
        <input type="radio"/>Cases
        <input type="radio"/>Monitors
        <Button onClick={() => props.dispatch(setCategoryFilter('SHOW_ALL'))}>
            Show All
        </Button>
        <Button onClick={() => props.dispatch(setCategoryFilter('SHOW_MONITORS'))}>
            Show Monitors
        </Button>
        <Button onClick={() => props.dispatch(setCategoryFilter('SHOW_CASES'))}>
            Show Cases
        </Button>
    </div>
);

Sidebar.propTypes = {
    // goods: PropTypes.array.isRequired,
    // onAddGoodClick: PropTypes.func.isRequired
    state: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({state});

export default connect(mapStateToProps)(Sidebar)