import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { createResponsiveStateReducer } from 'redux-responsive';

import * as reducers from './modules'

const rootReducers = (apolloClient) => {
  return combineReducers({
    ...reducers,
    routing: routerReducer,
    apollo: apolloClient.reducer(),
    browser: createResponsiveStateReducer()
  })
}

export default rootReducers
