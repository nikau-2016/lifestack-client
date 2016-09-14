import search from './search'
import user from './user'
import random from './random'
import contributor from './contributor'
import error from './error'
import {combineReducers} from 'redux'

export default combineReducers({
  random,
  search,
  user,
  contributor,
  error
})
