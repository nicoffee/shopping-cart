import * as actions from './index'

test('it should create ADD_GOOD action', () => {
    expect(actions.addGood()).toEqual({
        type: 'ADD_GOOD',
    });
});