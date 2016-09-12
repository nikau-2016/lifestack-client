import React from 'react'
import request from 'superagent'
import Tab from './Tab'
import Searchbar from './Searchbar'

export default React.createClass({
    props: {
        skill: React.PropTypes.object.isRequired,
        onSelected: React.PropTypes.func.isRequired,
        onWatchedSkill: React.PropTypes.func.isRequired,
        onUpvote: React.PropTypes.func.isRequired,
        onDownvote: React.PropTypes.func.isRequired,
        userId: React.PropTypes.number.isRequired,
        onLoad: React.PropTypes.func.isRequired
    },
    componentWillMount () {
      request
      .get("http://localhost:3000/v1/skills")
      .end((err, res) => {
        if (err) {
          return
        }
        this.setState({options: res.body.data})
      })
    },
    getInitialState () {
      return {
        options: []
      }
    },
    render () {
      if (this.props.userId === 0) {
        return (
          <section>
            <p>Select a skill and start watching tutorials</p>
            <Searchbar options={this.state.options} onSelected={this.props.onSelected}/>
            <h1>{this.props.skill.skillName}</h1>
            <div className="category">{this.props.skill.category}</div>
            <div className="difficulty">{this.props.skill.difficulty}</div>
            <Tab
              onUpvote={this.props.onUpvote}
              onDownvote={this.props.onDownvote}
              videos={this.props.skill.videos} />
          </section>
        )
      } else {
        return (
          <section>
            <p>Select a skill and start watching tutorials</p>
            <Searchbar options={this.state.options} onSelected={this.props.onSelected}/>
            <h1>{this.props.skill.skillName}</h1>
            <div className="category">{this.props.skill.category}</div>
            <div className="difficulty">{this.props.skill.difficulty}</div>
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
