import { createSlice } from '@reduxjs/toolkit'
import { onGetCharacter } from '../actions'

const initialState = {
  character: null,
  isFetching: false,
  isFetched: false,
  error: null,
}

const characterSlices = createSlice({
  name: 'character',
  initialState,
  reducers: {
    clearCharacter: (state) => {
      state.character = null
      state.isFetching = false
      state.isFetched = false
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder.addCase(onGetCharacter.pending, (state) => {
      state.error = null
      state.character = null
      state.isFetching = true
      state.isFetched = false
    })
    builder.addCase(onGetCharacter.fulfilled, (state, action) => {
      state.character = action.payload.data.results[0]
      state.error = false
      state.isFetched = true
      state.isFetching = false
    })
    builder.addCase(onGetCharacter.rejected, (state) => {
      state.error = true
      state.character = null
      state.isFetched = false
      state.isFetching = false
    })
  },
})

export default characterSlices.reducer
