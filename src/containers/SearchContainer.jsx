import React from 'react'
import SkillVideo from '../components/SkillVideo'
import SearchPage from '../components/SearchPage'
import {connect} from 'react-redux'
import {upVote, downVote} from '../actions'

const mapStateToProps = (state) => {
  return {
    skill: state.search
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onUpvote: (evt) => {
      dispatch(upVote(evt.target.id))
    },
    onDownvote: (evt) => {
      dispatch(downVote(evt.target.id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)
