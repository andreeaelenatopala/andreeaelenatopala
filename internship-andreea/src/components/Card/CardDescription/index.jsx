import React from 'react'
import PropTypes from 'prop-types'
import truncate from 'lodash.truncate'

import * as Styled from './styles'

const CardDescription = ({ description }) => {
  const shortString = truncate(description, {
    length: 30,
    omission: '...',
  })

  return <Styled.CardDescription>{shortString}</Styled.CardDescription>
}

CardDescription.propTypes = {
  description: PropTypes.string.isRequired,
}

export default CardDescription
