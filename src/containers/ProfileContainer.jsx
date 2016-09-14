import React from 'react'
import {connect} from 'react-redux'

import Profile from '../components/Profile'
import {getUserDetails, uploadShowcase, getRandom, retrieveSkill, deleteVideo} from '../actions'

const mapStateToProps = (state) => {
  return {
    user: state.user,
    randomSkill: state.random,
    error: state.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoad: (id) => {
      dispatch(getUserDetails(id))
    },
    onClickUpload: (skill_id, tutorialUrl) => {
      dispatch(uploadShowcase(skill_id, tutorialUrl))
    },
    onRandomSkill: (user_id) => {
      dispatch(getRandom(user_id))
    },
    onSkill: (evt) => {
      dispatch(retrieveSkill(evt.target.id))
    },
    onDelete: (evt) => {
      dispatch(deleteVideo(evt.target.id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
