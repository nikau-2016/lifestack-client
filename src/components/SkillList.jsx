import React from 'react'
import UserSkill from './UserSkill'

export default React.createClass({
  props: {
    skills: React.PropTypes.array.isRequired
  },
  render() {
    const skillList = this.props.skills.map((elem) => {
      return <UserSkill key={elem.id}
              skillName={elem.skillName}
              status={elem.status}
              skillXp={elem.skillXp} />
    })
    return(
      <div className="skill-list">
        <table>
          {skillList}
        </table>
      </div>
    )
  }
})
