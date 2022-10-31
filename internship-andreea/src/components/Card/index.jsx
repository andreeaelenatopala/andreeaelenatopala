import React from 'react'
import * as Styled from './styles'
import { useState } from 'react'
import CardDescription from './CardDescription'
import Modal from '../Modal'
import CardImg from './CardImg'
import CardTitle from './CardTitle'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { onGetCharacter } from '../../redux/actions'

import useMobileResolution from '../../hooks/isMobileResolution'

const Card = ({ title, description, image, setIsNavbarOpen, characterId }) => {
  const [showModal, setShowModal] = useState(false)
  const dispatch = useDispatch()
  const { isFetched, character } = useSelector(
    (state) => state.characterReducer
  )

  if (!characterId) {
    return null
  }

  const openModal = () => {
    setIsNavbarOpen(false)
    setShowModal(true)
  }
  const handleCardClick = async () => {
    openModal()

    dispatch(onGetCharacter(characterId))
  }
  const isMobile = useMobileResolution()

  return (
    <>
      <Styled.CardWrapper isMobile={isMobile} onClick={() => handleCardClick()}>
        <CardImg src={image} alt={'sal'}></CardImg>
        <CardTitle text={title} />
        <CardDescription description={description} />
      </Styled.CardWrapper>
      {showModal && isFetched && (
        <Modal
          isCharacterFetched={isFetched}
          description={character ? character.description : ''}
          showModal={showModal}
          image={image}
          title={title}
          setShowModal={setShowModal}
        />
      )}
    </>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  setIsNavbarOpen: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
  characterId: PropTypes.number.isRequired,

  image: PropTypes.string.isRequired,
}

export default Card
