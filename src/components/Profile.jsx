import React from 'react'
import UserDetail from './UserDetail'
import SkillList from './SkillList'
import UserGame from './UserGame'

export default React.createClass({
    props: {
      params: React.PropTypes.object.isRequired,
      user: React.PropTypes.object.isRequired,
      onLoad: React.PropTypes.func.isRequired,
      onClickUpload: React.PropTypes.func.isRequired
    },
    componentWillMount () {
      this.props.onLoad(this.props.params.id)
    },
    render () {
        return (
            <div className="profile">
                <UserDetail id={this.props.user.id}
                    username={this.props.user.username}
                    profile_pic={this.props.user.profile_pic} />
                <UserGame level ={this.props.user.level}
                    totalXp ={this.props.user.totalXp}
                    remainingXp ={this.props.user.remainingXp} />
                <SkillList skillList={this.props.user.skillList}
                           onClickUpload={this.props.onClickUpload} />
            </div>
        )
    }
})
