import React from 'react'
import { renderWithRouter } from '../../../utils/test'
import NavbarItem from './index'

// eslint-disable-next-line no-undef
describe('NavBar Item component', () => {
  // eslint-disable-next-line no-undef
  it('should render correctly by default', () => {
    const view = renderWithRouter(
      <NavbarItem
        route="/"
        name="Home"
        icon={null}
        active={false}
        /* eslint-disable-next-line no-undef */
        onClick={jest.fn()}
      />
    )

    // eslint-disable-next-line no-undef
    expect(view).toBeTruthy()
  })
})
