import React from 'react'

export default React.createClass({
    props: {
        id: React.PropTypes.number.isRequired,
        username: React.PropTypes.string.isRequired,
        profile_pic: React.PropTypes.string.isRequired,
        level: React.PropTypes.number.isRequired,
        totalXp: React.PropTypes.number.isRequired,
        remainingXp: React.PropTypes.number.isRequired
    },
    render () {
      const widthInPx = 400
      const totalXpStyle = {
        width: widthInPx + "px"
      }
      const levelXpStyle = {
        width: String((100 - this.props.remainingXp) / 100 * widthInPx) + "px"
      }

        return (
            <div className="user-game">
                <div className="left">
                  <img className="profile-pic" src={this.props.profile_pic} alt="Profile Picture" />
                  <p className="level">{this.props.level}</p>
                </div>

                <div className="right">
                  <div>
                    <p className = "user-name">{this.props.username}</p>
                  </div>
                  <div className="levelXp" style={totalXpStyle}>
                    <div className="totalXp" style={levelXpStyle}>
                    <p className="label">{`${this.props.totalXp} / ${this.props.totalXp + this.props.remainingXp} XP`}</p>
                    </div>
                  </div>
                </div>
            </div>
        )
    }
})
