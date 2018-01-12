import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from 'material-ui'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'
import { NavLink, Link } from 'react-router-dom'
import Rating from './../components/Rating'
import styles from './../styles/components/good.css'

const Good = ({ onClick, img, name, price, rating, id, goodsInCart }) => {
  const inCart = goodsInCart.allIds.includes(id) // Move to reducer

  return (
    <Card className={styles.card}>
      <CardMedia className={styles.media} image={img} title={name} />
      <CardContent>
        <NavLink to={'/product'}>
          <Typography type="subheading" gutterBottom>
            {name}
          </Typography>
        </NavLink>
        <Rating rating={rating} />
        <Typography type="headline">${price}</Typography>
      </CardContent>
      <CardActions>
        {inCart ? (
          <Link to="/cart">
            <Button color="primary">In Cart</Button>
          </Link>
        ) : (
          <div onClick={onClick}>
            <Button raised={true} color="accent">
              Add to Cart
            </Button>
          </div>
        )}
      </CardActions>
    </Card>
  )
}

Good.propTypes = {
  onClick: PropTypes.func.isRequired,
  img: PropTypes.string,
  name: PropTypes.string,
  vendor: PropTypes.string,
  id: PropTypes.number,
  price: PropTypes.number,
  rating: PropTypes.number,
  goodsInCart: PropTypes.object
}

export default Good
