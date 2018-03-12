import * as actions from './../actions';
import * as types from './../types';

describe('actions', () => {
  it('should create an action to get good details', () => {
    const id = '123';
    const expectedAction = {
      type: types.GET_GOOD_DETAILS_REQUEST,
      id
    };
    expect(actions.getGoodDetails(id)).toEqual(expectedAction);
  });
});
