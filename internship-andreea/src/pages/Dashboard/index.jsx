import React, { useEffect } from 'react'
import Cookies from 'universal-cookie'
import { useDispatch, useSelector } from 'react-redux'
import { useOutletContext } from 'react-router-dom'

import { Navigate } from 'react-router-dom'

import { onGetCharacters } from '../../redux/actions'

import Card from '../../components/Card'
import Loader from '../../atoms/Loader'
import * as Styled from './styles'
import { CardContainer } from '../../containers/CardsContainer/styles'

const Dashboard = () => {
  const cookies = new Cookies()
  const isLoggedIn = cookies.get('isLoggedIn')
  const dispatch = useDispatch()
  const [setIsNavbarOpen] = useOutletContext()
  const { characters, isFetching } = useSelector(
    (state) => state.charactersReducer
  )

  useEffect(() => {
    dispatch(onGetCharacters())
  }, [])

  if (isFetching) {
    return <Loader />
  }

  if (!isLoggedIn) {
    return <Navigate to={'/login'} replace />
  }

  return (
    <Styled.DashboardWrapper data-testid="dashboard-page">
      <Styled.Paragraf>Dashboard</Styled.Paragraf>
      <CardContainer>
        {characters.map((character) => {
          if (
            character.thumbnail.path ===
            'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available'
          ) {
            return null
          }

          if (character.description.length === 0) {
            return null
          }

          return (
            <Card
              key={character.id}
              characterId={character.id}
              title={character.name}
              description={character.description}
              image={character.thumbnail.path + '.jpg'}
              setIsNavbarOpen={setIsNavbarOpen}
            />
          )
        })}
      </CardContainer>
    </Styled.DashboardWrapper>
  )
}
export default Dashboard
