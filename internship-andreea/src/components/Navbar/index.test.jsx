import React from 'react'
import { fireEvent } from '@testing-library/dom'
import { renderWithRouter } from '../../utils/test'

import Navbar from './index'

// eslint-disable-next-line no-undef
jest.mock('../../hooks/isMobileResolution', () => () => true)

// eslint-disable-next-line no-undef
describe('NavBar component', () => {
  // eslint-disable-next-line no-undef
  it('should render correctly', () => {
    // eslint-disable-next-line no-undef
    const container = renderWithRouter(<Navbar toggleNavbar={jest.fn()} />)
    const navbarCheck = container.findByTestId('navbar-id')

    // eslint-disable-next-line no-undef
    expect(navbarCheck).toBeTruthy()
  })

  // eslint-disable-next-line no-undef
  it('should render the links correctly', async () => {
    // eslint-disable-next-line no-undef
    const { container } = renderWithRouter(<Navbar toggleNavbar={jest.fn()} />)
    const lis = container.querySelectorAll(' li')

    // eslint-disable-next-line no-undef
    expect(lis).toBeTruthy()

    // eslint-disable-next-line no-undef
    expect(lis).toHaveLength(2)
  })

  // eslint-disable-next-line no-undef
  it('should handle correctly clicking on a link', async () => {
    // eslint-disable-next-line no-undef
    const toggleNavbar = jest.fn()

    const { getAllByTestId } = renderWithRouter(
      <Navbar toggleNavbar={toggleNavbar} />
    )
    const links = getAllByTestId('navbar-item-link')
    fireEvent.click(links[0])

    // eslint-disable-next-line no-undef
    expect(toggleNavbar).toHaveBeenCalled()
  })
})
