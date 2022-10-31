import styled from 'styled-components'
import { colors } from '../../theme'

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
`
export const PStyle = styled.p`
  text-align: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  font-weight: bold;
  color: ${colors.green};
`

export const HStyle = styled.h1`
  text-align: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
`
