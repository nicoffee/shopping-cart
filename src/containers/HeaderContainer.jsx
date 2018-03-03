import { connect } from 'react-redux';

import Header from './../components/Header';

const mapStateToProps = state => ({ goodsInCart: state.goodsInCart });

const HeaderContainer = connect(mapStateToProps)(Header);

export default HeaderContainer;
