import React from 'react'
import {TwitterButton} from 'react-social-buttons'

export default React.createClass({
  props: {
    id: React.PropTypes.number.isRequired,
    skillName: React.PropTypes.string.isRequired,
    status: React.PropTypes.string.isRequired,
    skillXp: React.PropTypes.number.isRequired,
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
    return(
          <tr className="user-skill" id={this.props.id}>
            <th>{this.props.skillName}</th>
            <td>{this.props.status}</td>
            <td>{this.props.skillXp}</td>
            <td><TwitterButton url="http://localhost:5000/#/search" text={`I've just learned ${this.props.skillName} #adulting # lifestack`} /></td>
            <td>
              <input
                type="text"
                placeholder="Showcase your learned skill!"
                value={this.props.showcaseUrl}
                onChange={this.onInputChange} />
              <button
                type="button"
                onClick={() => this.props.onClickUpload(this.props.id, this.state.url)}>
              Upload</button>
            </td>
          </tr>
    )
  }
})
