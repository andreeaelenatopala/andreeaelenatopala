import styled from 'styled-components'
import { colors, breakpoints } from '../../../theme'

export const CardDescription = styled.div`
  height: fit-content;
  text-align: justify;
  justify-text: center;
  font-size: 16px;
  text-justify: inter-word;
  background: ${colors.backgroundCard};
  @media only screen and (max-width: ${breakpoints.mobile}) {
    font-size: 8px;
  }
`
