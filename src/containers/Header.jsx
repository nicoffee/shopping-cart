import { connect } from 'react-redux'

import MenuAppBar from './../components/MenuAppBar'

const mapStateToProps = state => ({ goodsInCart: state.goodsInCart })

const Header = connect(mapStateToProps)(MenuAppBar)

export default Header
