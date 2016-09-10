import React from 'react'
import {connect} from 'react-redux'

import Profile from '../components/Profile'
import {getUserDetails} from '../actions'

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoad: (id) => {
      dispatch(getUserDetails(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
