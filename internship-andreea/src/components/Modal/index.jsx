import React from 'react'
import { MdClose } from 'react-icons/md'

import * as Styled from './styles'
import PropTypes from 'prop-types'

const Modal = ({ setShowModal, description, image, title }) => {
  return (
    <Styled.ModalWrapper onClick={() => setShowModal(false)}>
      <Styled.ModalHeader />
      <Styled.ModalContent>
        <Styled.ModalButton
          onClick={() => setShowModal(false)}
          icon={<MdClose />}
        />

        <Styled.Img alt="marvel-hero" src={image} />
        <Styled.Title>{title}</Styled.Title>
        <Styled.HeroDescription>{description}</Styled.HeroDescription>
      </Styled.ModalContent>
    </Styled.ModalWrapper>
  )
}
Modal.propTypes = {
  setShowModal: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

export default Modal
