import styled from 'styled-components'
import { colors } from '../../theme'

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  background: ${colors.lightgrey};
`
export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border: 1px solid grey;
  background: ${colors.green};
  border-radius: 10px;
  width: 60%;
  justify-content: center;
  cursor: pointer;
  opacity: 1;
  box-shadow: ${colors.black} 0 3px 10px, ${colors.grey} 0 3px 10px;
`

export const Header = styled.h1`
  font-size: 16px;
  padding: 8px;
  border-radius: 5px;
  color: white;
  text-transform: uppercase;
`
export const ButtonLogin = styled.button`
  cursor: pointer;
  border: 0;
  border-radius: 4px;
  font-weight: 600;
  margin: 10px;
  width: 100px;
  padding: 10px 0;
  box-shadow: 0 0 20px ${colors.grey};
  transition: 0.2s;
  color: ${colors.darkgrey};
  background-color: ${colors.lightgrey};
  border: 1px solid ${colors.grey};
`
