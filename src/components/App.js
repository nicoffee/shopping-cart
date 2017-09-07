import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import DevTools from './../containers/DevTools'
import VisibleProductList from './../containers/VisibleGoodsList'
import Button from 'material-ui/Button'
import {setCategoryFilter} from './../actions'

class App extends Component {
    render() {
        return (
            <div className="App">
                <VisibleProductList/>
                <Button onClick={() => this.props.dispatch(setCategoryFilter('ALL'))}>
                    Show All
                </Button>
                <Button onClick={() => this.props.dispatch(setCategoryFilter('MONITORS'))}>
                    Show Monitors
                </Button>
                <Button onClick={() => this.props.dispatch(setCategoryFilter('CASES'))}>
                    Show Cases
                </Button>
                <DevTools/>
            </div>
        )
    }
}

App.propTypes = {
    state: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({state});

export default connect(mapStateToProps)(App)
