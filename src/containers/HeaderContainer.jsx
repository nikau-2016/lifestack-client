import React from 'react'
import Header from '../components/Header'
import {connect} from 'react-redux'
import {logout, displayProfile} from '../actions'

const mapStateToProps = (state) => {
  return {
    userId: state.user.id,
    error: state.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onProfile: () => {
      dispatch(displayProfile())
    },
    onLogout: (userId) => {
      dispatch(logout(userId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
