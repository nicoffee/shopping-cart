import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { NavLink, Link } from 'react-router-dom';
import { Typography } from 'material-ui';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Rating from './Rating';

const styles = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '250px',
    padding: '10px 0'
  },
  media: {
    height: '200px',
    backgroundSize: '60%'
  }
};

const Good = ({
  classes,
  onClick,
  img,
  name,
  price,
  rating,
  id,
  inCart,
  actions
}) => (
  <Card className={classes.card}>
    <CardMedia className={classes.media} image={img} title={name} />
    <CardContent>
      <NavLink
        to={{
          pathname: `product/${id}`
        }}>
        <Typography type="subheading" gutterBottom>
          {name}
        </Typography>
      </NavLink>
      <Rating rating={rating} />
      <Typography type="headline">${price}</Typography>
    </CardContent>
    {actions && (
      <CardActions>
        {inCart ? (
          <Link to="/cart">
            <Button color="primary">In Cart</Button>
          </Link>
        ) : (
          <div onClick={onClick}>
            <Button color="secondary" variant="raised">
              Add to Cart
            </Button>
          </div>
        )}
      </CardActions>
    )}
  </Card>
);

Good.propTypes = {
  classes: PropTypes.object,
  onClick: PropTypes.func.isRequired,
  img: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.PropTypes.string,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  rating: PropTypes.number,
  inCart: PropTypes.bool,
  actions: PropTypes.bool
};

export default injectSheet(styles)(Good);
