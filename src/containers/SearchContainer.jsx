import React from 'react'
import SkillVideo from '../components/SkillVideo'
import SearchPage from '../components/SearchPage'
import {connect} from 'react-redux'
import {changeStatus} from '../actions'

const mapStateToProps = (state) => {
  return {
    skill: state.search
  }
}

const mapDispatchToProps = (dispatch, state) => {
  return {
    onWatchedSkill: (evt) => {
      dispatch(changeStatus(evt.target.name, "watched"))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)
