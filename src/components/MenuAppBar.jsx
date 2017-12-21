import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'
import FilterLink from './../containers/FilterLink'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0 20px'
  },
  inner: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1000px',
    width: '100%'
  },
  categories: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    maxWidth: '1000px',
    width: '100%',
    '& a': {
      marginRight: 20,
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none'
    }
  },
  cartIcon: {
    position: 'relative'
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 5,
    '& svg': {
      width: 20,
      height: 20
    }
  },
  goodsCount: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: '5px',
    bottom: '5px',
    fontSize: '14px',
    fontWeight: 'bold',
    backgroundColor: '#f1c40f',
    borderRadius: '50%',
    width: '20px',
    height: '20px',
    color: 'white'
  }
}

@withStyles(styles)
class MenuAppBar extends Component {
  render() {
    const { goodsInCart } = this.props

    return (
      <AppBar className={this.props.classes.container} position="static">
        <Toolbar className={this.props.classes.inner}>
          <Typography type="title" color="inherit">
            Shop
          </Typography>
          <Link to="/cart">
            <IconButton className={this.props.classes.cartIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 511.999 511.999"
                width="25"
                height="25">
                <path
                  d="M214.685 402.828c-24.829 0-45.029 20.2-45.029 45.029 0 24.829 20.2 45.029 45.029 45.029s45.029-20.2 45.029-45.029c-.001-24.829-20.201-45.029-45.029-45.029zm0 64.914c-10.966 0-19.887-8.922-19.887-19.887 0-10.966 8.922-19.887 19.887-19.887s19.887 8.922 19.887 19.887c0 10.967-8.922 19.887-19.887 19.887zM372.63 402.828c-24.829 0-45.029 20.2-45.029 45.029 0 24.829 20.2 45.029 45.029 45.029s45.029-20.2 45.029-45.029c-.001-24.829-20.201-45.029-45.029-45.029zm0 64.914c-10.966 0-19.887-8.922-19.887-19.887 0-10.966 8.922-19.887 19.887-19.887 10.966 0 19.887 8.922 19.887 19.887 0 10.967-8.922 19.887-19.887 19.887zM383.716 165.755H203.567c-6.943 0-12.571 5.628-12.571 12.571s5.629 12.571 12.571 12.571h180.149c6.943 0 12.571-5.628 12.571-12.571 0-6.944-5.628-12.571-12.571-12.571zM373.911 231.035H213.373c-6.943 0-12.571 5.628-12.571 12.571s5.628 12.571 12.571 12.571H373.91c6.943 0 12.571-5.628 12.571-12.571 0-6.942-5.628-12.571-12.57-12.571z"
                  fill="#FFF"
                />
                <path
                  d="M506.341 109.744a25.04 25.04 0 0 0-19.489-9.258H95.278L87.37 62.097a25.173 25.173 0 0 0-14.614-17.989l-55.177-23.95c-6.37-2.767-13.773.156-16.536 6.524-2.766 6.37.157 13.774 6.524 16.537L62.745 67.17l60.826 295.261c2.396 11.628 12.752 20.068 24.625 20.068h301.166c6.943 0 12.571-5.628 12.571-12.571s-5.628-12.571-12.571-12.571H148.197l-7.399-35.916H451.69c11.872 0 22.229-8.44 24.624-20.068l35.163-170.675a25.043 25.043 0 0 0-5.136-20.954zM451.69 296.301H135.619l-35.161-170.674 386.393.001-35.161 170.673z"
                  fill="#FFF"
                />
              </svg>
              <div className={this.props.classes.goodsCount}>
                <span>{goodsInCart.allIds.length}</span>
              </div>
            </IconButton>
          </Link>
        </Toolbar>
        <Toolbar className={this.props.classes.categories}>
          <FilterLink
            filter="monitors"
            className={this.props.classes.filterLink}>
            <IconButton className={this.props.classes.icon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                <path d="M23 30h-2a2 2 0 0 1-2-2v-3h-6v3a2 2 0 0 1-2 2H9a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2zm7.25-30H1.75C.784 0 0 .84 0 1.875v19.25C0 22.16.784 23 1.75 23h28.5c.966 0 1.75-.84 1.75-1.875V1.875C32 .84 31.216 0 30.25 0zM30 21H2V2h28v19z" />
              </svg>
            </IconButton>
            Monitors
          </FilterLink>
          <FilterLink filter="cases" className={this.props.classes.filterLink}>
            <IconButton className={this.props.classes.icon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 21.924 21.924">
                <path
                  d="M13.272 1.312v19.635l7.004-3.922V3.779l-7.004-2.467zm6.53 1.437L12.794.118s.412.261.412.717l7.004 2.554s-.029-.497-.408-.64zM11.79 0H2.921c-.703 0-1.273.571-1.273 1.273V20.65c0 .702.571 1.274 1.273 1.274h8.869c.702 0 1.272-.572 1.272-1.274V1.273A1.273 1.273 0 0 0 11.79 0zm.613 20.651a.613.613 0 0 1-.613.614H2.921a.614.614 0 0 1-.614-.614V1.273c0-.339.275-.614.614-.614h8.869c.34 0 .613.275.613.614v19.378zM3.946 4.935h6.866a.438.438 0 0 0 .438-.437V2.187a.439.439 0 0 0-.438-.438H3.946a.438.438 0 0 0-.437.438v2.311c0 .241.196.437.437.437zm5.549-.748h1.307v.304H9.495v-.304zM3.946 9.486h6.866a.438.438 0 0 0 .438-.437V6.738a.439.439 0 0 0-.438-.438H3.946a.438.438 0 0 0-.437.438v2.311c0 .242.196.437.437.437zm5.428-.618h1.307v.304H9.374v-.304zm-1.982 8.315A1.359 1.359 0 1 0 8.75 18.54a1.36 1.36 0 0 0-1.358-1.357zm0 2.057a.699.699 0 1 1 .002-1.398.699.699 0 0 1-.002 1.398zm-3.894-4.348h7.741v.668H3.498v-.668zm.024-1.684h7.74v.667h-7.74v-.667zm0-1.747h7.74v.667h-7.74v-.667z"
                  fill="#090609"
                />
              </svg>
            </IconButton>
            Cases
          </FilterLink>
        </Toolbar>
      </AppBar>
    )
  }
}

MenuAppBar.propTypes = {
  goodsInCart: PropTypes.object.isRequired,
  classes: PropTypes.string
}

export default MenuAppBar
