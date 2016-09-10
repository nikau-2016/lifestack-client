import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {Router, Route, hashHistory} from 'react-router'

import reducers from './reducers'
import Header from './components/Header'
import Home from './components/Home'
import SearchContainer from './containers/SearchContainer'
import ProfileContainer from './containers/ProfileContainer'

let store = createStore(reducers)

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route component={Header}>
          <Route path='/' component={Home} />
          <Route path='/search' component={SearchContainer} />
          <Route path='/profile' component={ProfileContainer} />
        </Route>
      </Router>
    </Provider>,
    document.getElementById('app')
  )
})
