import React from 'react';
import Sidebar from './../Sidebar';
import GoodsListContainer from './../../containers/GoodsListContainer';

const CategoryPage = props => (
  <div className="inner">
    <Sidebar />
    <GoodsListContainer {...props} />
  </div>
);

export default CategoryPage;
