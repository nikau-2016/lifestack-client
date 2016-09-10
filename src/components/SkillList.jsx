import React from 'react'
import UserSkill from './UserSkill'

export default React.createClass({
  props: {
    skillList: React.PropTypes.array.isRequired
  },
  render() {
    const skillList = this.props.skillList.map((elem) => {
      return <UserSkill key={elem.id}
              skillName={elem.skillName}
              status={elem.status}
              skillXp={elem.skillXp} />
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
