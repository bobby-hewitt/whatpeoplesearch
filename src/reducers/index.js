import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import player from './player'
import dev from './dev'
export default (history) => combineReducers({
  router: connectRouter(history),
  player,
  dev: dev
  
})

// configureStore.js
