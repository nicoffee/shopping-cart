import { connect } from 'react-redux';
import Sidebar from './../components/Sidebar';
import { filterGoods } from './../actions';

const SidebarContainer = connect(null, { filterGoods })(Sidebar);

export default SidebarContainer;
