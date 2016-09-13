import React from 'react'
import UserSkill from './UserSkill'

export default React.createClass({
  props: {
    skillList: React.PropTypes.array.isRequired,
    onSkill: React.PropTypes.func.isRequired,
    onClickUpload: React.PropTypes.func.isRequired
  },
  getInitialState() {
    return {
      url: "",
      skill_id: null
    }
  },
  onInputChange(evt) {
    this.setState({
      url: evt.target.value
    })
  },
  onSelect(evt){
    this.setState({
      skill_id: evt.target.value
    })
  },
  onUploadSubmit () {
    this.props.onClickUpload(this.state.skill_id, this.state.url)

    this.setState({
      url: ""
    })
  },
  render() {
      const skillList = this.props.skillList.map((elem) => {
      return <UserSkill
              key={elem.id}
              id={elem.id}
              skillName={elem.skillName}
              status={elem.status}
              skillXp={elem.skillXp}
              difficulty={elem.difficulty}
              onClickUpload={this.props.onClickUpload}
              onSkill={this.props.onSkill}
              showcaseURL={elem.showcaseURL} />
    })

    const options = this.props.skillList.map((elem, i) => {
      return <option key={i} value={elem.id}>{elem.skillName}</option>
    })
    return(
      <div className="skill-list">
        <select
          value={this.state.skill_id || ""}
          onChange={this.onSelect}>
          <option value="">Select a skill</option>
          {options}
        </select>

        <input
          type="text"
          placeholder="Upload a tutorial!"
          value={this.state.url}
          onChange={this.onInputChange} />

        <button
          type="button"
          onClick={this.onUploadSubmit}>
        Upload</button>


        <table>
          <thead>
            <tr>
              <th>Skill</th>
              <th>Difficulty</th>
              <th>Status</th>
              <th>XP</th>
              <th>Tutorial</th>
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
