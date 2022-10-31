import React from 'react'
import Home from './index'

import { renderWithRouter } from '../../utils/test'

// eslint-disable-next-line no-undef
jest.mock('universal-cookie', () => {
  // eslint-disable-next-line no-undef
  const orig = jest.genMockFromModule('universal-cookie')
  orig.prototype.get = () => true
  return orig
})

// eslint-disable-next-line no-undef
afterEach(() => {
  // eslint-disable-next-line no-undef
  jest.resetAllMocks()
})

// eslint-disable-next-line no-undef
describe('Home component', () => {
  //eslint-disable-next-line no-undef
  it('should render the Paragraph correctly', () => {
    const { findByText } = renderWithRouter(<Home />)
    const paragraph = findByText('welcome')
    // eslint-disable-next-line no-undef
    expect(paragraph).toBeTruthy()
  })
})
