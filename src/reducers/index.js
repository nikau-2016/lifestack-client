import search from './search'
import user from './user'
import random from './random'
import contributor from './contributor'
import {combineReducers} from 'redux'

export default combineReducers({
  random,
  search,
  user,
  contributor
})
