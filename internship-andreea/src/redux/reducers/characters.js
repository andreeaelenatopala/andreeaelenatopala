import { createSlice } from '@reduxjs/toolkit'
import { onGetCharacters } from '../actions'

const initialState = {
  characters: [],
  isFetching: false,
  isFetched: false,
  error: null,
}

const charactersSlices = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    clearCharacters: (state) => {
      state.characters = []
      state.isFetching = false
      state.isFetched = false
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder.addCase(onGetCharacters.pending, (state) => {
      state.error = null
      state.isFetching = true
      state.isFetched = false
    })
    builder.addCase(onGetCharacters.fulfilled, (state, action) => {
      state.characters = action.payload.data.results
      state.error = null
      state.isFetched = true
      state.isFetching = false
    })
    builder.addCase(onGetCharacters.rejected, (state) => {
      state.error = true
      state.isFetched = false
      state.isFetching = false
    })
  },
})

export default charactersSlices.reducer
