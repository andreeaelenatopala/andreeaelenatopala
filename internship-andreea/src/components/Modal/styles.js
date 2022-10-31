import styled from 'styled-components'
import Button from '../../atoms/Button/index'
import { colors, breakpoints } from '../../theme'

export const ModalWrapper = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  width: 100%;
  height: 100%;
  display: block;
  background-color: ${colors.modalBackgroundColor2};
`

export const ModalContent = styled.div`
  width: 50%;
  width: 50%;
  width: 60%;
  margin: auto;
  background: ${colors.modalContent};
  border: 1px solid ${colors.clasicBorder};
  padding: 16px;
  text-align: justify;
  text-justiify: inter-word;
  border-radius: 4px;
  align-items: center;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    width: 100%;
  }
  @media only screen and (max-width: ${breakpoints.large}) {
    width: 80%;
  }
`

export const ModalButton = styled(Button)`
  font-size: 2.5rem;
  color: ${colors.green};
  padding: 0;
  height: 5%;
  width: 10%;
  background: none;
  cursor: pointer;
  opacity: 0.7;
  border: none;

  &:hover {
    color: ${colors.white};
    opacity: 1;
  }
`
export const ModalHeader = styled.div`
  width: 100%;
  height: 30%;
`
export const Title = styled.div`
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  @media only screen and (min-width: ${breakpoints.large}) {
    font-size: 38px;
    font-weight: bold;
  }
`
export const HeroDescription = styled.div`
  font-size: 16px;
  text-align: justify;
  @media only screen and (min-width: ${breakpoints.large}) {
    font-size: 28px;
  }
`
export const Img = styled.img`
    display: block;
    width: 80%;
    text-align: center;
    object-fit: scale-down;
    margin: auto;
    border-radius: 5px;}

    @media only screen and (min-width: ${breakpoints.large}) {
        width:40%;
    }
    
`
