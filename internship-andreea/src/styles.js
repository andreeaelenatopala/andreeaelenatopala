import styled from 'styled-components'
import { breakpoints } from './theme'

export const Main = styled.main`
  background-color: aliceblue;
  z-index: 8;
  position: absolute;
  width: 100%;
  height: 100vh;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    padding: 0px;
  }
`
