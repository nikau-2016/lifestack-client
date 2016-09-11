import React from 'react'
import UserSkill from './UserSkill'

export default React.createClass({
  props: {
    skillList: React.PropTypes.array.isRequired,
    onClickUpload: React.PropTypes.func.isRequired
  },
  render() {
    const skillList = this.props.skillList.map((elem) => {
      return <UserSkill
              key={elem.id}
              id={elem.id}
              skillName={elem.skillName}
              status={elem.status}
              skillXp={elem.skillXp}
              onClickUpload={this.props.onClickUpload} />
    })
    return(
      <div className="skill-list">
        <table>
          <thead>
          </thead>
          <tbody>
            {skillList}
          </tbody>
        </table>
      </div>
    )
  }
})
