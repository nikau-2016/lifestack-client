import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, compose, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {Router, Route, hashHistory} from 'react-router'
import {routerMiddleware} from 'react-router-redux'


import reducers from './reducers'
import HeaderContainer from './containers/HeaderContainer'
import Home from './components/Home'
import SearchContainer from './containers/SearchContainer'
import ProfileContainer from './containers/ProfileContainer'

let store = createStore(reducers,
  compose(
    applyMiddleware(thunkMiddleware, routerMiddleware(hashHistory)),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))
document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route component={HeaderContainer}>
          <Route path='/' component={Home} />
          <Route path='/search' component={SearchContainer} />
          <Route path='/profile/:id' component={ProfileContainer} />
        </Route>
      </Router>
    </Provider>,
    document.getElementById('app')
  )
})
