import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import {responsiveStoreEnhancer} from 'redux-responsive'


import createHistory from 'history/createBrowserHistory'
import rootReducer from './redux'

export const history = createHistory()

const buildStore = (apolloClient) => {
  const initialState = {}
  const enhancers = [
    responsiveStoreEnhancer
  ]
  const middleware = [
    thunk,
    routerMiddleware(history),
    apolloClient.middleware()
  ]
  
  if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension
  
    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension())
    }
  }
  
  const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
  )
  
  const store = createStore(
    rootReducer(apolloClient),
    initialState,
    composedEnhancers
  )

  return store
}

export default buildStore