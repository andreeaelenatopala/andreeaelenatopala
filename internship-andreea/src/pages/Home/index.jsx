import React from 'react'
import * as Styled from './styles'
import Cookies from 'universal-cookie'
import { Navigate } from 'react-router-dom'

const Home = () => {
  const cookies = new Cookies()

  const isLoggedIn = cookies.get('isLoggedIn')

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />
  }

  return (
    <Styled.HomeWrapper data-testid="home-page">
      <Styled.PStyle data-testid="welcome-message">
        Welcome {isLoggedIn}
      </Styled.PStyle>
    </Styled.HomeWrapper>
  )
}
export default Home
