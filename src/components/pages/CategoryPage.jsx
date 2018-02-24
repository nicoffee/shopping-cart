import React from 'react';
import Sidebar from './../Sidebar';
import VisibleGoodsList from './../../containers/VisibleGoodsList';

const CategoryPage = props => (
  <div className="inner">
    <Sidebar />
    <VisibleGoodsList {...props} />
  </div>
);

export default CategoryPage;
