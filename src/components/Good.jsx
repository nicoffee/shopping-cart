import React from 'react'
import PropTypes from 'prop-types'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Rating from './../components/Rating'
import Button from './../ui-components/Button'
import styles from './../styles/components/good.css'

const Good = ({ onClick, img, name, vendor, price, rating }) => (
  <div>
    <Card className={styles.card}>
      <CardMedia className={styles.media} image={img} title={name} />
      <CardContent>
        <span>{vendor}</span>
        <span>${price}</span>
        <Rating rating={rating} />
      </CardContent>
      <CardActions>
        <div onClick={onClick}>
          <Button raised={true} color={'contrast'}>
            Add to Cart
          </Button>
        </div>
      </CardActions>
    </Card>
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
