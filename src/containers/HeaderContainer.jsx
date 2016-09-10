import React from 'react'
import Header from '../components/Header'
import {connect} from 'react-redux'
import {retrieveSkill} from '../actions'

const mapDispatchToProps = (dispatch) => {
  return {
    onSkillSelect: (evt) => {
      dispatch(retrieveSkill(evt.value))
    }
  }
}

export default connect(undefined, mapDispatchToProps)(Header)
