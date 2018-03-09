import React from 'react';
import Typography from 'material-ui/Typography';
import GoodsListContainer from './../../containers/GoodsListContainer';

const MainPage = props => (
  <div>
    <Typography variant="display1" gutterBottom>
      Most popular
    </Typography>
    <GoodsListContainer {...props} actions={false} />
  </div>
);

export default MainPage;
