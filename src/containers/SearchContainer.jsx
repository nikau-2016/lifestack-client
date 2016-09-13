import React from 'react'
import SkillVideo from '../components/SkillVideo'
import SearchPage from '../components/SearchPage'
import {connect} from 'react-redux'
import {upVote, downVote, changeStatus, retrieveSkill} from '../actions'

const mapStateToProps = (state) => {
  return {
    skill: state.search,
    userId: state.user.id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onWatchedSkill: (evt) => {
      dispatch(changeStatus(evt.target.name, "watched"))
    },
    onUpvote: (evt) => {
      dispatch(upVote(evt.target.id, evt.target.value))
    },
    onDownvote: (evt) => {
      dispatch(downVote(evt.target.id, evt.target.value))
    },
    onSelected: (selected) => {
      dispatch(retrieveSkill(selected))
    },
    onLoad: (id) => {
      dispatch(retrieveSkill(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)
