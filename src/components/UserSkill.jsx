import React from 'react'

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
