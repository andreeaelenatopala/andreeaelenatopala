import styled from 'styled-components'
import Button from '../../atoms/Button'
import { breakpoints } from '../../theme'
import { colors } from '../../theme'

export const MenuButton = styled(Button)`
  font-size: 2.5rem;
  color: ${colors.green};
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
`

export const AppWrapper = styled.div`
  @media screen and (min-device-width: ${breakpoints.tablet}) {
    margin-left: ${(props) => (props.isNavbarOpen ? '250px' : '0')};
  }
`
