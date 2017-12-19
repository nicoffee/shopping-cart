import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
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
  cartIcon: {
    position: 'relative'
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
      <AppBar className={this.props.classes.container}>
        <div className={this.props.classes.inner}>
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
        </div>
      </AppBar>
    )
  }
}

MenuAppBar.propTypes = {
  goodsInCart: PropTypes.object.isRequired,
  classes: PropTypes.string
}

export default MenuAppBar
