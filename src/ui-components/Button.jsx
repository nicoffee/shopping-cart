import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'

const styles = {
  button: {
    background: '#f1c40f',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px'
  }
}

const OverridesClassNames = props => (
  <Button className={props.classes.button}>
    {props.children ? props.children : 'class names'}
  </Button>
)

OverridesClassNames.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(OverridesClassNames)
