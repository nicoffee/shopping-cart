import React from 'react'
import Enzyme, { mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Good from './../components/Good'

Enzyme.configure({ adapter: new Adapter() })

test('It renders <Good /> component', () => {
  let props
  let mountedGood

  mountedGood = shallow(<Good {...props} onClick={() => {}} />)

  expect(mountedGood.length).toBeGreaterThan(0)
})
