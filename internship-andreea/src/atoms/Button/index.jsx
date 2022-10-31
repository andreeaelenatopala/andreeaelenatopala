import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ text, className = 'default', onClick, icon }) => {
  return (
    <button onClick={onClick} className={className}>
      {icon}
      {text}
    </button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.object,
}

export default Button
