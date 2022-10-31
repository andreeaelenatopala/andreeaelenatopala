import styled from 'styled-components'
import { colors, breakpoints } from '../../theme'

export const CardWrapper = styled.div`
  display: ${(props) => (props.isMobile ? 'block' : 'inline-block')};
  flex-direction: column;
  width: auto;
  margin: 16px;
  border-radius: 8px;
  padding: 8px;
  background: ${colors.lightgreen};
  box-shadow: ${colors.black} 0 3px 10px, ${colors.black} 0 3px 10px;
  @media only screen and (max-width: ${breakpoints.mobile}) {
    width: 86%;
    margin: 8px;
  }
  @media only screen and (max-width: ${breakpoints.tablet}) {
    width: auto;
  }
`
