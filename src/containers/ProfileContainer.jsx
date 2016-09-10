import React from 'react'
import {connect} from 'react-redux'

import Profile from '../components/Profile'

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Profile)
