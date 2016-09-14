import React from 'react'
import SkillVideo from './SkillVideo'
import ReactDisqusThread from 'react-disqus-thread'

const clientURL = 'https://adulting.herokuapp.com/'

export default React.createClass({
  props: {
    user: React.PropTypes.object.isRequired,
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
                    user={this.props.user}
                    video={elem}
                    onUpvote={this.props.onUpvote}
                    onDownvote={this.props.onDownvote} />
    })

    // Logged out tab
    if (this.props.user.id === 0) {
      if (!this.props.skillId) {
        return this.tabWithoutSkill(videos)
      } else {
        return this.tabWithSkillLO(videos)
      }
    // Logged in tab
    } else {
      const watched = this.props.user.skillList.find(elem => elem.skill_id === this.props.skillId)
      if (!this.props.skillId) {
        return this.tabWithoutSkill(videos)
      } else {
        if (watched) {
          return this.tabWatchedSkill(videos)
        } else {
          return this.tabToLearnSkill(videos)
        }
      }
    }
  },
  tabWithSkillLO (videos) {
    return (
      <div className="tab">
        <p>Log in to vote on the best videos!</p>
        {videos}
      </div>
    )
  },
  tabWithoutSkill (videos) {
    return (
      <div className="tab">
        <p>Select a skill and start browsing videos</p>
      </div>
    )
  },
  tabWatchedSkill (videos) {
    return (
      <div className="tab">
        {videos}
        <ReactDisqusThread
        shortname="hashtagadulting-co-nz"
        identifier={this.props.skillId}
        title="Post your comments here"
        url={`${clientURL}/search/${this.props.skillId}`}/>
      </div>
    )
  },
  tabToLearnSkill (videos) {
    return (
      <div className="tab">
      <button
      className="got-it-btn"
      name={this.props.skillId}
      onClick={this.props.onWatchedSkill}>Got It!</button>
        {videos}
        <ReactDisqusThread
        shortname="hashtagadulting-co-nz"
        identifier={this.props.skillId}
        title="Post your comments here"
        url={`${clientURL}/search/${this.props.skillId}`}/>
      </div>
    )
  }
})
