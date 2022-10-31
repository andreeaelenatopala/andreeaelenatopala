import fetch from 'isomorphic-fetch'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { CHARACTERS_ROUTE } from '../../api/routes'
import { PUBLIC_KEY } from '../../api/keys'

export const getCharacters = async () => {
  return fetch(`${CHARACTERS_ROUTE}?limit=100&apikey=${PUBLIC_KEY}`).then(
    (res) => res.json()
  )
}

export const onGetCharacters = createAsyncThunk(
  'characters/getCharacters',
  async () => {
    return getCharacters()
  }
)
