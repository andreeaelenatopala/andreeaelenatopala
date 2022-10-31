import { configureStore } from '@reduxjs/toolkit'
// import { createBrowserHistory } from 'history'
import { createLogger } from 'redux-logger'

import rootReducer from './reducers/index'

const preloadedState = {}

// const history = createBrowserHistory()

// https://github.com/LogRocket/redux-logger
const logger = createLogger({
  logErrors: true,
})

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: rootReducer,
  preloadedState,
})

export default store
