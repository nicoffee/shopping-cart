import React from 'react';
import VisibleGoodsList from './../../containers/VisibleGoodsList';

const MainPage = props => (
  <div className="inner">
    <VisibleGoodsList {...props} />
  </div>
);

export default MainPage;
