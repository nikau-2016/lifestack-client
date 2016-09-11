import React from 'react'
import Tab from './Tab'

export default React.createClass({
    props: {
        skill: React.PropTypes.object.isRequired
    },
    render () {
        return (
          <section>
            <h1>{this.props.skill.skillName}</h1>
            <h3>{this.props.skill.category}</h3>
            <button>Got It!</button>
            <Tab videos={this.props.skill.videos} />
          </section>
        )
  }
})
