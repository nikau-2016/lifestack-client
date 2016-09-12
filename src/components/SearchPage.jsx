import React from 'react'
import Tab from './Tab'
import {userId} from './header'

export default React.createClass({
    props: {
        skill: React.PropTypes.object.isRequired,
        onWatchedSkill: React.PropTypes.func.isRequired,
        onUpvote: React.PropTypes.func.isRequired,
        onDownvote: React.PropTypes.func.isRequired,
        userId: React.PropTypes.number.isRequired
    },
    render () {
      if (this.props.userId === 0) {
        return (
          <section>
            <h1>{this.props.skill.skillName}</h1>
            <h3>{this.props.skill.category}</h3>
            <Tab
              onUpvote={this.props.onUpvote}
              onDownvote={this.props.onDownvote}
              videos={this.props.skill.videos} />
          </section>
        )
      } else {
        return (
          <section>
            <h1>{this.props.skill.skillName}</h1>
            <h3>{this.props.skill.category}</h3>
            <button
            name={this.props.skill.id}
            onClick={this.props.onWatchedSkill}>Got It!</button>
            <Tab
              onUpvote={this.props.onUpvote}
              onDownvote={this.props.onDownvote}
              videos={this.props.skill.videos} />
          </section>
        )
      }
    }
})
