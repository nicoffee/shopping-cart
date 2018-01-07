import React from 'react'
import PropTypes from 'prop-types'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Rating from './../components/Rating'
import styles from './../styles/components/good.css'

const Good = ({ onClick, img, name, vendor, price, rating }) => (
  <div>
    Good
  </div>
)

Good.propTypes = {
  onClick: PropTypes.func.isRequired,
  img: PropTypes.string,
  name: PropTypes.string,
  vendor: PropTypes.string,
  price: PropTypes.number,
  rating: PropTypes.number
}

export default Good
