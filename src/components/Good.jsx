import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Button from './../ui-components/Button'

const styleCard = {
  card: {
    width: 300,
    marginRight: 20
  },
  media: {
    height: 300
  }
}

const Good = ({ onClick, img, name, vendor, price, rating, classes }) => (
  <div>
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={img} title={name} />
      <CardContent>
        <span>{vendor}</span>
        <span>${price}</span>
        <div className="rating">{rating}</div>
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
  rating: PropTypes.number,
  classes: PropTypes.object.isRequired
}

export default withStyles(styleCard)(Good)
