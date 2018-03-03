import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import CartLinkContainer from './../../containers/CartLinkContainer';
import FilterLink from './../../containers/FilterLink';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0 20px'
  },

  divider: {
    width: '100%'
  },

  inner: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1100px',
    width: '100%'
  },

  categories: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    maxWidth: '1100px',
    width: '100%',

    '& $a': {
      display: 'flex',
      alignItems: 'center',
      marginRight: '20px',
      textDecoration: 'none',
      color: 'black'
    }
  },

  cartIcon: {
    position: 'relative'
  },

  icon: {
    width: '20px',
    height: '20px',
    marginRight: '5px',

    '& svg': {
      width: '20px',
      height: '20px'
    }
  },

  'monitorsIcon casesIcon videocardsIcon': {
    width: '30px',
    height: '30px',
    marginRight: '10px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  }
};

const Header = ({ classes, goodsInCart }) => (
  <AppBar className={classes.container} position="static">
    <Toolbar className={classes.inner}>
      <Typography type="title">
        <Link to="/">Computer Shop</Link>
      </Typography>
      <CartLinkContainer />
    </Toolbar>
    <Divider className={classes.divider} />
    <Toolbar className={classes.categories}>
      <FilterLink filter="monitors">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32">
          <path d="M23 30h-2a2 2 0 0 1-2-2v-3h-6v3a2 2 0 0 1-2 2H9a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2zm7.25-30H1.75C.784 0 0 .84 0 1.875v19.25C0 22.16.784 23 1.75 23h28.5c.966 0 1.75-.84 1.75-1.875V1.875C32 .84 31.216 0 30.25 0zM30 21H2V2h28v19z" />
        </svg>
        Monitors
      </FilterLink>
      <FilterLink filter="cases">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.924 21.924">
          <path
            d="M13.272 1.312v19.635l7.004-3.922V3.779l-7.004-2.467zm6.53 1.437L12.794.118s.412.261.412.717l7.004 2.554s-.029-.497-.408-.64zM11.79 0H2.921c-.703 0-1.273.571-1.273 1.273V20.65c0 .702.571 1.274 1.273 1.274h8.869c.702 0 1.272-.572 1.272-1.274V1.273A1.273 1.273 0 0 0 11.79 0zm.613 20.651a.613.613 0 0 1-.613.614H2.921a.614.614 0 0 1-.614-.614V1.273c0-.339.275-.614.614-.614h8.869c.34 0 .613.275.613.614v19.378zM3.946 4.935h6.866a.438.438 0 0 0 .438-.437V2.187a.439.439 0 0 0-.438-.438H3.946a.438.438 0 0 0-.437.438v2.311c0 .241.196.437.437.437zm5.549-.748h1.307v.304H9.495v-.304zM3.946 9.486h6.866a.438.438 0 0 0 .438-.437V6.738a.439.439 0 0 0-.438-.438H3.946a.438.438 0 0 0-.437.438v2.311c0 .242.196.437.437.437zm5.428-.618h1.307v.304H9.374v-.304zm-1.982 8.315A1.359 1.359 0 1 0 8.75 18.54a1.36 1.36 0 0 0-1.358-1.357zm0 2.057a.699.699 0 1 1 .002-1.398.699.699 0 0 1-.002 1.398zm-3.894-4.348h7.741v.668H3.498v-.668zm.024-1.684h7.74v.667h-7.74v-.667zm0-1.747h7.74v.667h-7.74v-.667z"
            fill="#090609"
          />
        </svg>
        Cases
      </FilterLink>
      <FilterLink filter="videocards">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 233.039 233.039">
          <path d="M0 38.413h36.121v144.713H20.416v-13.012h-6.418v-37.155h6.418v-27.013h-6.418V68.792h6.418V54.118H0V38.413zm233.039 49.274V169.6c0 6.938-5.624 12.566-12.563 12.566h-.013v12.46h-80.221v-12.46h-7.612v12.46H52.409v-12.46h-7.034V75.125h175.101c6.939 0 12.563 5.624 12.563 12.562zM62.52 181.542h-4v9h4v-9zm8 0h-4v9h4v-9zm8 0h-4v9h4v-9zm8 0h-4v9h4v-9zm2.466-52.737h-9.988v3.925h5.559v1.943c-2.151 2.514-4.56 3.77-7.229 3.77-1.166 0-2.248-.239-3.245-.72a7.989 7.989 0 0 1-2.584-1.962c-.726-.829-1.297-1.808-1.711-2.935-.414-1.127-.621-2.338-.621-3.634 0-1.244.188-2.423.563-3.537a9.55 9.55 0 0 1 1.594-2.954 7.533 7.533 0 0 1 2.488-2.021c.971-.492 2.04-.738 3.206-.738 1.476 0 2.843.362 4.101 1.088 1.256.726 2.234 1.775 2.934 3.148l4.004-2.954c-.934-1.84-2.326-3.304-4.179-4.392-1.853-1.089-4.075-1.633-6.665-1.633-1.918 0-3.692.369-5.324 1.107a13.583 13.583 0 0 0-4.256 2.993 13.938 13.938 0 0 0-2.838 4.392c-.687 1.671-1.029 3.453-1.029 5.344 0 1.996.343 3.854 1.029 5.577.687 1.724 1.619 3.221 2.799 4.489a12.894 12.894 0 0 0 4.158 2.993c1.594.726 3.297 1.088 5.111 1.088 2.928 0 5.492-1.101 7.695-3.304v3.109h4.43v-14.182zm5.534 52.737h-4v9h4v-9zm8 0h-4v9h4v-9zm8 0h-4v9h4v-9zm1.591-66.146H93.572v27.595h5.363v-11.427h10.961v-4.353h-10.96v-7.112h13.176v-4.703zm6.409 66.146h-4v9h4v-9zm8 0h-4v9h4v-9zm1.876-52.154l9.833-13.992h-5.791l-6.84 10.261-6.88-10.261h-5.829l9.833 13.992-9.522 13.602h5.83l6.568-9.872 6.529 9.872h5.791l-9.522-13.602zm21.958 52.154h-4v9h4v-9zm8 0h-4v9h4v-9zm8 0h-4v9h4v-9zm8 0h-4v9h4v-9zm8 0h-4v9h4v-9zm8 0h-4v9h4v-9zm8 0h-4v9h4v-9zm8 0h-4v9h4v-9zm8 0h-4v9h4v-9zm3.373-50.847c0-19.328-15.67-35-35-35s-35 15.672-35 35c0 19.327 15.67 35 35 35s35-15.673 35-35zm-16.152.557c.861-.464 1.723-.924 2.57-1.381l2.471-1.408c.804-.46 1.583-.902 2.313-1.36.057-.034.111-.068.167-.104a26.576 26.576 0 0 0-9.268-16.713c-.068.092-.14.192-.212.288-.307.424-.652.896-1.028 1.413l-1.296 1.679c-.452.6-.964 1.22-1.493 1.864-.53.647-1.078 1.314-1.634 1.996a662.53 662.53 0 0 0-1.761 2.023c-.002 0-.004.003-.007.007l.125-2.003c.057-.957.072-1.93.109-2.903l.093-2.914.012-2.847c.006-.927.01-1.824-.021-2.684 0-.07-.003-.13-.005-.198a26.497 26.497 0 0 0-9.984-1.941c-3.208 0-6.281.567-9.13 1.604l.15.337c.211.478.45 1.013.71 1.6.249.606.52 1.263.805 1.96.294.692.576 1.444.868 2.224l.908 2.411.873 2.538.005.012-1.675-1.112c-.798-.526-1.631-1.027-2.458-1.547-.83-.513-1.661-1.029-2.478-1.536-.838-.487-1.661-.969-2.459-1.434a69.096 69.096 0 0 0-2.333-1.323c-.059-.032-.112-.06-.17-.094-5.087 3.977-8.688 9.76-9.843 16.386.115.012.235.025.356.035l1.739.187c.65.086 1.354.182 2.1.284.745.089 1.538.224 2.361.36.824.137 1.678.275 2.543.419l2.632.513h.012l-1.799.896c-.855.428-1.703.899-2.567 1.354-.861.463-1.723.923-2.57 1.38-.842.479-1.671.951-2.471 1.411a64.542 64.542 0 0 0-2.481 1.46 26.582 26.582 0 0 0 9.269 16.714l.212-.289 1.028-1.413 1.296-1.677c.452-.602.964-1.222 1.493-1.864l1.634-1.994c.581-.665 1.17-1.345 1.761-2.023a.028.028 0 0 1 .007-.009l-.124 2.003c-.058.957-.074 1.928-.11 2.903l-.094 2.914-.011 2.846a65.78 65.78 0 0 0 .02 2.684c.001.069.004.131.004.197a26.483 26.483 0 0 0 9.985 1.942c3.208 0 6.281-.566 9.129-1.605-.049-.108-.097-.223-.149-.337l-.71-1.598-.804-1.959a56.414 56.414 0 0 1-.868-2.225c-.295-.784-.601-1.593-.908-2.413l-.874-2.536-.004-.013c.55.368 1.106.735 1.674 1.113.797.524 1.631 1.025 2.458 1.545l2.478 1.538c.838.487 1.661.969 2.458 1.434.8.465 1.573.918 2.333 1.321.06.034.113.062.17.095 5.088-3.978 8.688-9.758 9.844-16.385a11.892 11.892 0 0 0-.356-.036l-1.739-.185c-.65-.088-1.355-.183-2.1-.287-.746-.087-1.538-.221-2.361-.357-.824-.137-1.678-.276-2.543-.42l-2.632-.513h-.012c.59-.296 1.188-.593 1.798-.898.856-.425 1.705-.898 2.569-1.352z" />
        </svg>
        Videocards
      </FilterLink>
    </Toolbar>
  </AppBar>
);

Header.propTypes = {
  classes: PropTypes.object,
  goodsInCart: PropTypes.object.isRequired
};

export default injectSheet(styles)(Header);
