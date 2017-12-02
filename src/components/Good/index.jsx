import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'

const styleCard = {
  card: {
    width: 300,
    marginRight: 20
  },
  media: {
    height: 300
  }
}

const style = {
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  borderRadius: 3,
  border: 0,
  color: 'white',
  height: 48,
  padding: '0 30px',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)'
}

const Good = ({ onClick, img, name, vendor, price, rating, classes }) => {
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia className={classes.media} image={img} title={name} />
        <CardContent>
          <span>{vendor}</span>
          <span>${price}</span>
          <div className="rating">{rating}</div>
        </CardContent>
        <CardActions>
          <Button
            raised={true}
            style={style}
            color={'contrast'}
            onClick={onClick}>
            Add to Cart
          </Button>
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
  rating: PropTypes.number,
  classes: PropTypes.object.isRequired
}

export default withStyles(styleCard)(Good)
