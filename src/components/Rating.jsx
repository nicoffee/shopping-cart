import React from 'react'
import PropTypes from 'prop-types'
import styles from './../styles/components/rating.css'

const Rating = ({ rating }) => {
  const getDecimal = x => (x > 0 ? x % 1 : -x % 1).toFixed(1)
  let stars = []

  for (let i = 1; i <= 5; i++) {
    stars.push(
      <svg
        className={styles.star}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 501.28 501.28"
        key={i}>
        <path
          fill={rating >= i ? '#ffcd00' : 'black'}
          d="M501.28 194.37l-166.02-35.04-84.62-147.06v407.5l154.9 69.24-17.98-168.72z"
        />
        <path
          fill={
            rating >= i ? '#ffcd00' : +getDecimal(rating) ? '#ffcd00' : 'black'
          }
          d="M166.02 159.33L0 194.37l113.72 125.92-17.98 168.72 154.9-69.24V12.27z"
        />
      </svg>
    )
  }
  return <div className={styles.rating}>{stars}</div>
}

Rating.propTypes = {
  rating: PropTypes.number
}

export default Rating
