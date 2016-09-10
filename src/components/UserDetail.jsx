import React from 'react'

export default React.createClass({
  props: {
    id: React.PropTypes.number.isRequired,
    username: React.PropTypes.string.isRequired,
    profile_pic: React.PropTypes.string.isRequired
  },
  render () {
    return (
      <div className="user-detail">
        <h2 className = "user-name">{this.props.username}</h2>
        <img className = "profile-pic" src={this.props.profile_pic} alt="user face" />
      </div>
    )
  }
})
