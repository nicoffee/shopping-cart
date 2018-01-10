import { connect } from 'react-redux'

import Good from './../components/Good'

const mapStateToProps = state => ({ goodsInCart: state.goodsInCart })

const AddedGood = connect(mapStateToProps)(Good)

export default AddedGood
