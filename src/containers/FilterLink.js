import React from 'react'
import { NavLink } from 'react-router-dom'

const FilterLink = ({ filter, children }) => (
    <NavLink
        to={filter === 'SHOW_ALL' ? '/' : filter}
        activeStyle={{
            textDecoration: 'none',
            color: 'red'
        }}
    >
        {children}
    </NavLink>
);

export default FilterLink