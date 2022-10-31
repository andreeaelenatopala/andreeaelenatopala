import React from 'react'
import PropTypes from 'prop-types'
import * as Styled from './styles'

const TextArea = ({ placeholder = '', onChange, type, value }) => {
  const handleChange = (e) => {
    onChange(e.target.value)
  }
  return (
    <div>
      <Styled.TextAreaDesign
        data-testid="test-id"
        placeholder={placeholder}
        onChange={handleChange}
        type={type}
        value={value}
      />
    </div>
  )
}

TextArea.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

export default TextArea
