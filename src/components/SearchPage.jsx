import React from 'react'
import request from 'superagent'
import Tab from './Tab'
import Searchbar from './Searchbar'

const url = 'https://adulting-server.herokuapp.com'

export default React.createClass({
    props: {
        params: React.PropTypes.object.isRequired,
        skill: React.PropTypes.object.isRequired,
        onSelected: React.PropTypes.func.isRequired,
        onWatchedSkill: React.PropTypes.func.isRequired,
        onUpvote: React.PropTypes.func.isRequired,
        onDownvote: React.PropTypes.func.isRequired,
        user: React.PropTypes.object.isRequired,
        onLoad: React.PropTypes.func.isRequired,
        error: React.PropTypes.string.isRequired
    },
    componentWillMount () {
      request
      .get(`${url}/v1/skills`)
      .end((err, res) => {
        if (err) {
          return
        }
        this.setState({options: res.body.data})
      })

      if (this.props.params.id) {
        this.props.onSelected(this.props.params.id)
      }
    },
    getInitialState () {
      return {
        options: []
      }
    },
    render () {
      return (
        <section>
          <div className="error">{this.props.error}</div>
          <Searchbar options={this.state.options} onSelected={this.props.onSelected}/>
          <h1 className="skillTitle">{this.props.skill.skillName}</h1>
            <div className="diff-cat">
              <h3 className="category">{this.props.skill.category}</h3>
              <h3 className="difficulty">{this.props.skill.difficulty}</h3>
            </div>
          <Tab
            user={this.props.user}
            skillId={this.props.skill.id}
            onUpvote={this.props.onUpvote}
            onDownvote={this.props.onDownvote}
            onWatchedSkill={this.props.onWatchedSkill}
            videos={this.props.skill.videos} />
       </section>
      )
    }
})
