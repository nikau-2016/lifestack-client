import React from 'react'
import {connect} from 'react-redux'

import Profile from '../components/Profile'
import {getUserDetails, uploadShowcase} from '../actions'

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoad: (id) => {
      dispatch(getUserDetails(id))
    },
    onClickUpload: (skill_id, showcaseUrl) => {
      dispatch(uploadShowcase(skill_id, showcaseUrl))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
