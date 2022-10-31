import React from 'react'
import { render } from '@testing-library/react'
import Home from './index'
import { fireEvent } from '@testing-library/dom'

import { LoginWrapper } from '../Login/styles'
import { screen } from '@testing-library/dom'
import Button from '../../atoms/Button'

// eslint-disable-next-line no-undef
describe('Login page', () => {
  // eslint-disable-next-line no-undef
  it('should correctly render by default', () => {
    const component = render(<Home />)
    // eslint-disable-next-line no-undef
    expect(component).toBeTruthy()
  })

  // eslint-disable-next-line no-undef
  it('should render the <LoginWrapper /> correctly', () => {
    const component = render(<LoginWrapper />)
    // eslint-disable-next-line no-undef
    expect(component).toBeTruthy()
  })

  // eslint-disable-next-line no-undef
  it('check if form has 2 inputs, 1 button', async () => {
    const { getAllByTestId, findByRole } = render(<Home />)
    const inputs = getAllByTestId('input').length
    const submitButton = await findByRole('button')

    // eslint-disable-next-line no-undef
    expect(submitButton).toBeTruthy()
    // eslint-disable-next-line no-undef
    expect(inputs).toEqual(2)
  })
  // eslint-disable-next-line no-undef
  it('calls Handle submit prop when clicked', () => {
    // eslint-disable-next-line no-undef
    const handleSubmit = jest.fn()

    render(
      <Button text="login" onClick={handleSubmit}>
        Login
      </Button>
    )
    fireEvent.click(screen.getByText(/Login/i))
    // eslint-disable-next-line no-undef
    expect(handleSubmit).toHaveBeenCalledTimes(1)
  })
})
