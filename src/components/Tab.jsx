import React from 'react'
import SkillVideo from './SkillVideo'


export default React.createClass({
  props: {
    userId: React.PropTypes.number.isRequired,
    skillId: React.PropTypes.number.isRequired,
    videos: React.PropTypes.array.isRequired,
    onUpvote: React.PropTypes.func.isRequired,
    onDownvote: React.PropTypes.func.isRequired,
    onWatchedSkill: React.PropTypes.func.isRequired
  },
  render () {
    const videos = (this.props.videos || [])
      .sort((a, b) => a.votes < b.votes)
      .map(elem => {
        return <SkillVideo key={elem.id}
                    userId={this.props.userId}
                    id={elem.id}
                    url={elem.url}
                    votes={elem.votes}
                    onUpvote={this.props.onUpvote}
                    onDownvote={this.props.onDownvote} />
    })

    // Logged out tab
    if (this.props.userId === 0) {
      if (!this.props.skillId) {
        return (
          <div className="tab">
            <p>Select a skill and start browsing videos</p>
          </div>
        )
      } else {
        return (
          <div className="tab">
            <p>Log in to vote on the best videos!</p>
            {videos}
          </div>
        )
      }
    // Logged in tab
    } else {
      if (!this.props.skillId) {
        return (
          <div className="tab">
            <p>Select a skill and start browsing videos</p>
          </div>
        )
      } else {
        return (
          <div className="tab">
          <button
          name={this.props.skillId}
          onClick={this.props.onWatchedSkill}>Got It!</button>
            {videos}
          </div>
        )
      }
    }
  }
})
