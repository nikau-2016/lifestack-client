import React from 'react'
import {connect} from 'react-redux'

import Contributor from '../components/Contributor'
import {getContributorDetails} from '../actions'

const mapStateToProps = (state) => {
  return {
    contributor: state.contributor,
    error: state.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoad: (id) => {
      dispatch(getContributorDetails(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contributor)
