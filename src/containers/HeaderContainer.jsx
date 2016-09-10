import React from 'react'
import Header from '../components/Header'
import {connect} from 'react-redux'
import {retrieveSkill, login} from '../actions'

const mapDispatchToProps = (dispatch) => {
  return {
    onSkillSelect: (evt) => {
      dispatch(retrieveSkill(evt.value))
    },
    onLogin: (username, password) => {
      dispatch(login(username, password))
    }
  }
}

export default connect(undefined, mapDispatchToProps)(Header)
