import { combineReducers } from '@reduxjs/toolkit'

import charactersReducer from './characters'
import characterReducer from './character'

export default combineReducers({ charactersReducer, characterReducer })
