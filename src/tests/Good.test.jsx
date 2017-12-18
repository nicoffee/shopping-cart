import React from 'react'
import Enzyme, { mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Good from './../components/Good'

Enzyme.configure({ adapter: new Adapter() })

describe('<Good />', () => {
  let props
  let mountedGood

  const Good = () => {
    if (!mountedGood) {
      mountedGood = mount(<Good {...props} />)
    }
    return mountedGood
  }

  beforeEach(() => {
    props = {
      onClick: undefined,
      img: undefined,
      name: undefined,
      vendor: undefined,
      price: undefined,
      rating: undefined,
      classes: undefined
    }
    mountedGood = undefined
  })

  // All tests will go here
  it('always renders a div', () => {
    const divs = Good().find('div')
    expect(divs.length).toBeGreaterThan(0)
  })
})
