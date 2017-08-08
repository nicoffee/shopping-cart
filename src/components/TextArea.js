import React from 'React'
import PropTypes from 'prop-types'

const TextArea = ({ onChange }) => (
  <textarea name="" id="" cols="30" rows="10" onChange={ onChange }>

  </textarea>
)

TextArea.propTypes = {
    onChange: PropTypes.func.isRequired
}

export default TextArea