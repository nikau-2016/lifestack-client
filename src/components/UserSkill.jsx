import React from 'react'

export default React.createClass({
  props: {
    skillName: React.PropTypes.string.isRequired,
    status: React.PropTypes.string.isRequired,
    skillXp: React.PropTypes.number.isRequired,
    onClickUpload: React.PropTypes.func.isRequired
  },

  render() {
    return(
          <tr>
            <th>{this.props.skillName}</th>
            <td>{this.props.status}</td>
            <td>{this.props.skillXp}</td>
            <td>
              <input type="text" placeholder="Showcase your learned skill!" />
              <button type="button" onClickUpload={this.props.onClickUpload}>Upload</button>
            </td>
          </tr>
    )
  }
})