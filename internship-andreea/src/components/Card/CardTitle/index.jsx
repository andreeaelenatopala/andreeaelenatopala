import React from 'react'
import PropTypes from 'prop-types'

import * as Styled from './styles'

const CardTitle = ({ text }) => {
  return <Styled.CardTitle>{text}</Styled.CardTitle>
}

CardTitle.propTypes = {
  text: PropTypes.string.isRequired,
}

export default CardTitle
