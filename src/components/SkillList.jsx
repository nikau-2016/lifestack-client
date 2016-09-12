import React from 'react'
import UserSkill from './UserSkill'

export default React.createClass({
  props: {
    skillList: React.PropTypes.array.isRequired,
    onClickUpload: React.PropTypes.func.isRequired,
    showcaseUrl: React.PropTypes.string.isRequired
  },
  getInitialState() {
    return {
      url: "Showcase your learned skill!"
    }
  },
  onInputChange(evt) {
    this.setState({
      url: evt.target.value
    })
  },
  render() {
    console.log("skillList", this.props.skillList)
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
    const skill = this.props.skillList.filter((elem) => {
      return elem.id === options.value
    })
    return(
      <div className="skill-list">
        <select>
          {options}
        </select>
        <input
          type="text"
          placeholder="Showcase your learned skill!"
          value={this.props.showcaseUrl}
          onChange={this.onInputChange} />
        <button
          type="button"
          onClick={() => this.props.onClickUpload(skill, this.props.id, this.state.url)}>
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
