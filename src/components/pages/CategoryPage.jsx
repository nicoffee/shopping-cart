import React from 'react';
import SidebarContainer from './../../containers/SidebarContainer';
import GoodsListContainer from './../../containers/GoodsListContainer';

const CategoryPage = props => (
  <div className="inner">
    <SidebarContainer />
    <GoodsListContainer {...props} />
  </div>
);

export default CategoryPage;
