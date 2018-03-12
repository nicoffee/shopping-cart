import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Good from './../components/Good';

Enzyme.configure({ adapter: new Adapter() });

describe('LockScreen', () => {
  let props;
  let mountedGood;
  const good = () => {
    if (!mountedGood) {
      mountedGood = mount(
        <Router>
          <Good {...props} />
        </Router>
      );
    }
    return mountedGood;
  };

  beforeEach(() => {
    props = {
      onClick: () => { },
      img: undefined,
      name: undefined,
      price: undefined,
      rating: undefined,
      id: undefined,
      goodsInCart: { allIds: [] },
      actions: true
    };
    mountedGood = undefined;
  });

  it('always renders a `Card`', () => {
    expect(good().find(Card).length).toBe(1);
  });

  it('always renders a `CardMedia`', () => {
    expect(good().find(CardMedia).length).toBe(1);
  });

  it('always renders a `CardContent`', () => {
    expect(good().find(CardContent).length).toBe(1);
  });

  it('always renders a `CardActions`', () => {
    expect(good().find(CardActions).length).toBe(1);
  });
});
