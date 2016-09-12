import React from 'react'

export default React.createClass({
  props: {
    id: React.PropTypes.number.isRequired,
    skillName: React.PropTypes.string.isRequired,
    status: React.PropTypes.string.isRequired,
    skillXp: React.PropTypes.number.isRequired,
    showcaseUrl: React.PropTypes.string.isRequired
  },
  render() {
    return(
          <tr className="user-skill" id={this.props.id}>
            <th>{this.props.skillName}</th>
            <td>{this.props.status}</td>
            <td>{this.props.skillXp}</td>
            <td>{this.props.showcaseUrl}</td>
          </tr>
    )
  }
})
