import search from './search'
import user from './user'
import random from './random'
import {combineReducers} from 'redux'

export default combineReducers({
  random,
  search,
  user
})
