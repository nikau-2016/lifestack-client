import React from 'react'
import SkillVideo from '../components/SkillVideo'
import SearchPage from '../components/SearchPage'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
  return {
    skill: state.search
  }
}

export default connect(mapStateToProps)(SearchPage)
