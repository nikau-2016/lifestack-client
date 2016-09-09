import React from 'react'

export default React.createClass({
  props: {
    id: React.PropTypes.number.isRequired,
    userName: React.PropTypes.string.isRequired,
    profilePic: React.PropTypes.string.isRequired
  },
  render () {
    return (
      <div className="profile">
        <h2 className = "user-name">{this.props.userName}</h2>
        <img className = "profile-pic" src={this.props.profilePic} alt="user face" />
      </div>
    )
  }
})
