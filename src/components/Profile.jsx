import React from 'react'
import SkillList from './SkillList'
import UserGame from './UserGame'

export default React.createClass({
    props: {
      params: React.PropTypes.object.isRequired,
      user: React.PropTypes.object.isRequired,
      onSkill: React.PropTypes.object.isRequired,
      onRandomSkill: React.PropTypes.object.isRequired,
      onLoad: React.PropTypes.func.isRequired,
      onClickUpload: React.PropTypes.func.isRequired,
      onDelete: React.PropTypes.func.isRequired,
      error: React.PropTypes.string.isRequired
    },
    componentWillMount () {
      this.props.onLoad(this.props.params.id)
      this.props.onRandomSkill(this.props.params.id)
    },
    getRandom() {
      this.props.onRandomSkill(this.props.params.id)
    },
    render () {
        return (
            <div className="user-profile">
              <div className="error">{this.props.error}</div>
              <UserGame
                  id={this.props.user.id}
                  username={this.props.user.username}
                  profile_pic={this.props.user.profile_pic}level ={this.props.user.level}
                  totalXp ={this.props.user.totalXp}
                  remainingXp ={this.props.user.remainingXp} />

                <div className="skill-suggestion">
                  <div className="suggested-skill">Want to learn {this.props.randomSkill.skillName}?</div>
                  <div className="suggestion-answer">
                    <span id={this.props.randomSkill.id} onClick={this.props.onSkill}>YES, Show me the skill page!</span>
                    <span onClick={this.getRandom}>NO, Show me another skill!</span>
                  </div>
                </div>

                <SkillList skillList={this.props.user.skillList}
                           onSkill={this.props.onSkill}
                           onClickUpload={this.props.onClickUpload}
                           onDelete={this.props.onDelete} />
            </div>
        )
    }
})
