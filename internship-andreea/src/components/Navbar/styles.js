import styled from 'styled-components'
import { colors } from '../../theme'
import Button from '../../atoms/Button'

export const NavbarWrapper = styled.div`
  background-color: ${colors.green};
  margin: 0;
  position: fixed;
  overflow-y: scroll;
  padding-top: 16px;
  width: ${(props) => (props.isMobile ? '100%' : '250px')};
  height: 100%;
  z-index: 10;
  box-shadow: ${colors.black} 0 3px 10px, ${colors.black} 0 3px 10px;
`

export const Navbarul = styled.ul`
  flex-direction: column;
  list-style: none;
  letter-spacing: 0.2px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px 0 0 0;
  margin: 0;
`

export const CloseButton = styled(Button)`
  font-size: 2.5rem;
  color: ${colors.white};
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  opacity: 0.7;

  &:hover {
    color: ${colors.white};
    opacity: 1;
  }
`
export const ButtonLogOut = styled(Button)`
  color: ${colors.white};
  padding: 8;
  border: none;
  background: none;
  cursor: pointer;
  opacity: 0.7;
  font-size:16px;
  font-weight:bold;

  &:hover {
    color: ${colors.white};
    opacity: 1;
`
