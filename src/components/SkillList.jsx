import React from 'react'
import UserSkill from './UserSkill'

export default React.createClass({
  props: {
    skillList: React.PropTypes.array.isRequired,
    onClickUpload: React.PropTypes.func.isRequired
  },
  getInitialState() {
    return {
      url: "Upload a tutorial!",
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

    const options = this.props.skillList.map((elem, i) => {
      return <option key={i} value={elem.id}>{elem.skillName}</option>
    })
    return(
      <div className="skill-list">
        <select
          value={this.state.skill_id}
          onChange={this.onSelect}>
          {options}
        </select>

        <input
          type="text"
          placeholder="Showcase your learned skill!"
          value={this.props.showcaseUrl}
          onChange={this.onInputChange} />

        <button
          type="button"
          onClick={() => this.props.onClickUpload(this.state.skill_id, this.state.url)}>
        Upload</button>


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
