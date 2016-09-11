import React from 'react'
import Tab from './Tab'

export default React.createClass({
    props: {
        skill: React.PropTypes.object.isRequired,
        onUpvote: React.PropTypes.func.isRequired,
        onDownvote: React.PropTypes.func.isRequired
    },
    render () {
        return (
          <section>
            <h1>{this.props.skill.skillName}</h1>
            <h3>{this.props.skill.category}</h3>
            <button>Got It!</button>
            <Tab onUpvote={this.props.onUpvote} onDownvote={this.props.onDownvote} videos={this.props.skill.videos} />
          </section>
        )
  }
})
