import fetch from 'isomorphic-fetch'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { CHARACTERS_ROUTE } from '../../api/routes'
import { PUBLIC_KEY } from '../../api/keys'

export const getCharacter = async (characterId) => {
  return fetch(`${CHARACTERS_ROUTE}/${characterId}?apikey=${PUBLIC_KEY}`).then(
    (res) => res.json()
  )
}

export const onGetCharacter = createAsyncThunk(
  'character/getCharacter',
  async (characterId) => {
    return getCharacter(characterId)
  }
)
