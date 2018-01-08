import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import Typography from 'material-ui/Typography'
import Divider from 'material-ui/Divider'
import FilterLink from './../containers/FilterLink'
import styles from './../styles/components/menu-app-bar.css'

const MenuAppBar = ({ goodsInCart }) => (
  <AppBar className={styles.container} position="static">
    <Toolbar className={styles.inner}>
      <Typography type="title">
        <Link to="/">Computer Shop</Link>
      </Typography>
      <Link to="/cart">
        <IconButton className={styles.cartIcon}>
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
          <div className={styles.goodsCount}>
            <span>{goodsInCart.allIds.length}</span>
          </div>
        </IconButton>
      </Link>
    </Toolbar>
    <Divider className={styles.divider} />
    <Toolbar className={styles.categories}>
      <FilterLink filter="monitors">
        <div className={styles.monitorsIcon} />
        Monitors
      </FilterLink>
      <FilterLink filter="cases">
        <div className={styles.casesIcon} />
        Cases
      </FilterLink>
      <FilterLink filter="videocards">
        <div className={styles.videocardsIcon} />
        Videocards
      </FilterLink>
    </Toolbar>
  </AppBar>
)

MenuAppBar.propTypes = {
  goodsInCart: PropTypes.object.isRequired
}

export default MenuAppBar
