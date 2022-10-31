import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../../../theme'

export const ListItem = styled.li`
  display: flex;
  max-width: 100%;
  margin: 8px 0;
  opacity: 0.9;

  &:hover {
    opacity: 1;
  }
`

export const IconWrapper = styled.div`
  color: ${colors.white};
  display: inline-block;
  margin-right: 8px;
`
export const NavbarLink = styled(Link)`
  flex-direction: row;
  text-decoration: none;
  color: ${colors.white};
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  font-size: 16px;
`
