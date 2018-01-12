import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Card from "material-ui/Card";
import Good from "./../components/Good";

Enzyme.configure({ adapter: new Adapter() });

// test('It renders <Good /> component', () => {
//   let props
//   let mountedGood

//   mountedGood = shallow(<Good {...props} onClick={() => {}} />)

//   expect(mountedGood.length).toBeGreaterThan(0)
// })

describe("LockScreen", () => {
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
      onClick: () => {},
      img: undefined,
      name: undefined,
      price: undefined,
      rating: undefined,
      id: undefined,
      goodsInCart: { allIds: [] }
    };
    mountedGood = undefined;
  });

  it("always renders a `Card`", () => {
    expect(good().find(Card).length).toBe(1);
  });
});
