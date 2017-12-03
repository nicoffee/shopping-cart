import {
  ADD_GOOD,
  REMOVE_GOOD,
  SET_CATEGORY_FILTER,
  REQUEST_GOODS,
  RECEIVE_GOODS,
  GOODS_SUCCESS,
  GOODS_FAILURE
} from './../types'

export const addGoodInCart = ({ img, name, price, rating }) => ({
  type: ADD_GOOD,
  img,
  name,
  price,
  rating
})

export const removeGoodFromCart = id => ({
  type: REMOVE_GOOD,
  id
})

export const setCategoryFilter = filter => ({
  type: SET_CATEGORY_FILTER,
  filter
})

export const requestGoods = data => ({
  type: REQUEST_GOODS,
  goods: data
})

export const receiveGoods = (filter, response) => ({
  type: RECEIVE_GOODS,
  filter,
  response
})

export const successGoodsRequest = data => ({
  type: GOODS_SUCCESS,
  goods: data
})

export const errorGoodsRequest = error => ({
  type: GOODS_FAILURE,
  goods: error
})

export function fetchGoods() {
  return function(dispatch) {
    dispatch(requestGoods())

    return fetch(`http://localhost:3000/goods/`)
      .then(
        response => response.json(),
        error => console.log('An error occured.', error)
      )
      .then(json => dispatch(successGoodsRequest(json)))
  }
}

// axios
// .get('http://localhost:3000/goods')
// .then(response => {
//   switch (filter) {
//     case 'ALL':
//       let allGoods = []
//       Object.keys(response.data).map(key => {
//         allGoods = allGoods.concat(response.data[key])
//       })
//       console.log('allGoods', )
//       return allGoods
//   }
// })
// .catch(function(error) {
//   console.log(error)
// })
