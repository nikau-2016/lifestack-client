import React from 'react'
import Header from '../components/Header'
import {connect} from 'react-redux'
import {retrieveSkill, logout, displayProfile} from '../actions'

const mapDispatchToProps = (dispatch) => {
  return {
    onSkillSelect: (evt) => {
      dispatch(retrieveSkill(evt.value))
    },
    onLogin: (username, password) => {
      dispatch(login(username, password))
    },
    onProfile: () => {
      dispatch(displayProfile())
    },
    onLogout: (userId) => {
      dispatch(logout(userId))
    }
  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.user.id
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
