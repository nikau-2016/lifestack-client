import React from 'react'
import UserGame from './UserGame'

export default React.createClass({
    props: {
      params: React.PropTypes.object.isRequired,
      contributor: React.PropTypes.object.isRequired,
      onLoad: React.PropTypes.func.isRequired,
      error: React.PropTypes.string.isRequired
    },
    componentWillMount () {
      this.props.onLoad(this.props.params.id)
    },
    render () {
      const skillList = this.props.contributor.skillList.map(elem => {
          return <tr key={elem.id} className="contributor-skill" id={elem.id}>
          <td>{elem.skillName}</td>
          <td>{elem.difficulty}</td>
          <td>{elem.status}</td>
          <td>{elem.skillXp}</td>
          </tr>
        })

        return (
            <div className="contributor-profile">
                <div className="error">{this.props.error}</div>
                <UserGame
                    id={this.props.contributor.id}
                    username={this.props.contributor.username}
                    profile_pic={this.props.contributor.profile_pic}level ={this.props.contributor.level}
                    totalXp ={this.props.contributor.totalXp}
                    remainingXp ={this.props.contributor.remainingXp} />
                <table>
                  <thead>
                  <tr>
                     <th>Skill</th>
                     <th>Difficulty</th>
                     <th>Status</th>
                     <th>XP</th>
                  </tr>
                  </thead>
                  <tbody>
                    {skillList}
                  </tbody>
                </table>
            </div>
        )
    }
})
