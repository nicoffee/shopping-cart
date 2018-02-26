import React from 'react';
import GoodsListContainer from './../../containers/GoodsListContainer';

const MainPage = props => (
  <div className="inner">
    <GoodsListContainer {...props} />
  </div>
);

export default MainPage;
