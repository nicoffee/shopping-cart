import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { normalize } from 'normalizr';
import * as schema from './../actions/schema';
import * as actions from './../actions';
import * as types from './../types';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const mock = new MockAdapter(axios);

describe('async actions', () => {
  // afterEach(() => {
  //   mock.reset();
  //   mock.restore();
  // })

  it('creates FETCH_GOODS_SUCCESS when fetching goods has been done', () => {
    mock.onGet('http://localhost:3000/popular').reply(200, [
      {
        "id": "5aa234177b357285378151ff",
        "img": "https://cdn.shopify.com/s/files/1/0232/4705/products/Enthoo_Pro_White.png?v=1405467646",
        "name": "Phanteks Enthoo Pro Chassis White",
        "vendor": "Phanteks",
        "price": 99.99,
        "rating": 4.5,
        "vendor_code": 90222793
      }
    ]);

    const expectedActions = [
      { type: types.FETCH_GOODS_REQUEST, filter: 'popular' },
      {
        type: types.FETCH_GOODS_SUCCESS, filter: 'popular', response: normalize([
          {
            "id": "5aa234177b357285378151ff",
            "img": "https://cdn.shopify.com/s/files/1/0232/4705/products/Enthoo_Pro_White.png?v=1405467646",
            "name": "Phanteks Enthoo Pro Chassis White",
            "vendor": "Phanteks",
            "price": 99.99,
            "rating": 4.5,
            "vendor_code": 90222793
          }
        ], schema.arrayOfGoods)
      }
    ]

    const store = mockStore({ goods: [] })

    return store.dispatch(actions.fetchGoods('popular')).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    });
  })
})
