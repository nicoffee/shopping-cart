import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GoodsList from './../components/GoodsList';
import Good from './../components/Good';

Enzyme.configure({ adapter: new Adapter() });

it('should render a list of goods as an unordered list', () => {
  const mockGoods = [
    {
      id: 1,
      img:
        'https://cdn.shopify.com/s/files/1/0232/4705/products/Enthoo_Pro_White.png?v=1405467646',
      name: 'Phanteks Enthoo Pro Chassis White',
      vendor: 'Phanteks',
      price: 99.99,
      rating: 4.5,
      vendor_code: 90222793
    },
    {
      id: 2,
      img: 'http://corsair.com/~/media/E09D7B8EFCE0461FAA13133F2D312EE7.ashx',
      name: 'Corsair Crystal 570x RGB-Edition',
      vendor: 'Corsair',
      price: 142.85,
      rating: 5,
      vendor_code: 90669793
    },
    {
      id: 3,
      img:
        'https://dstatic.computeruniverse.net/images/1000/907055249603EE7D187C4A56AE6FC126.jpg',
      name: 'Fractal Design Meshify C Tempered Glass',
      vendor: 'Fractal Design',
      price: 73.02,
      rating: 5,
      vendor_code: 90705524
    }
  ];

  const wrapper = mount(
    <GoodsList goods={mockGoods} onAddGoodClick={() => void 0} />
  );
  expect(wrapper.find(Good).length).toEqual(mockGoods.length);
});
