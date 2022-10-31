import React from 'react'
import PropTypes from 'prop-types'

import * as Styled from './styles'

const Input = ({ type, value, onChange, placeholder = ' ', errorMessage }) => {
  const handleChange = (e) => {
    onChange(e.target.value)
  }

  return (
    <Styled.InputDesign
      data-testid="input"
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
      errorMessage={errorMessage}
    />
  )
}
Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  errorMessage: PropTypes.string
}
export default Input
