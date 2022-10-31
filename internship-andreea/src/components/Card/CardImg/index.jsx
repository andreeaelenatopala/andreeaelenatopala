import React from 'react'
import PropTypes from 'prop-types'

import * as Styled from './styles'

const CardImg = ({ src, alt }) => {
  return <Styled.CardImg src={src} alt={alt} />
}

CardImg.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}

export default CardImg
