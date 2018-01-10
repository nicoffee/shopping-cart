import React from 'react'
import PropTypes from 'prop-types'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'
import { NavLink, Link } from 'react-router-dom'
import Rating from './../components/Rating'
import styles from './../styles/components/good.css'

const Good = ({
  onClick,
  img,
  name,
  vendor,
  price,
  rating,
  id,
  goodsInCart
}) => {
  const inCart = goodsInCart.allIds.includes(id) // Move to reducer

  return (
    <div>
      <Card className={styles.card}>
        <CardMedia className={styles.media} image={img} title={name} />
        <CardContent>
          <NavLink to={'/product'}>{name}</NavLink>
          <span>{vendor}</span>
          <span>${price}</span>
          <Rating rating={rating} />
        </CardContent>
        <CardActions>
          {inCart ? (
            <Link to="/cart">In Cart</Link>
          ) : (
            <div onClick={onClick}>
              <Button raised={true} color="accent">
                Add to Cart
              </Button>
            </div>
          )}
        </CardActions>
      </Card>
    </div>
  )
}

Good.propTypes = {
  onClick: PropTypes.func.isRequired,
  img: PropTypes.string,
  name: PropTypes.string,
  vendor: PropTypes.string,
  price: PropTypes.number,
  rating: PropTypes.number
}

export default Good
