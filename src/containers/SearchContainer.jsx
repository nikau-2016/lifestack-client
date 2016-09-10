import React from 'react'
import SkillVideo from '../components/SkillVideo'
import SearchPage from '../components/SearchPage'
import {connect} from 'react-redux'
import {retrieveSkill} from '../actions'

const mapStateToProps = (state) => {
  return {
    skill: state.search
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getSkill: () => {
      dispatch(retrieveSkill())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)
