import React from 'react'
import SkillVideo from './SkillVideo'


export default React.createClass({
  props: {
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
                    id={elem.id}
                    url={elem.url}
                    votes={elem.votes}
                    onUpvote={this.props.onUpvote}
                    onDownvote={this.props.onDownvote} />
    })
    if (this.props.userId === 0 || (this.props.userId !==0 && !this.props.skillId)) {
      return (
        <div className="tab">
          {videos}
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
})
