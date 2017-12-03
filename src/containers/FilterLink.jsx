import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const FilterLink = ({ filter, children }) => (
  <NavLink to={filter === 'ALL' ? '/filter' : `/filter/${filter}`}>
    {children}
  </NavLink>
)

FilterLink.propTypes = {
  filter: PropTypes.string,
  children: PropTypes.any
}

export default FilterLink
