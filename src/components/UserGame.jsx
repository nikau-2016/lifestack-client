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
      const remainingXPWidth = String((100 - this.props.remainingXp) / 100 * widthInPx)
      const levelXpStyle = {
        width: widthInPx + "px"
      }
      const totalXpStyle = {
        width: remainingXPWidth + "px"
      }

        return (
            <div className="user-game">
                <div className="left">
                  <img className="profile-pic" src={this.props.profile_pic} alt="Profile Picture" />
                  <p className="level">{this.props.level}</p>
                </div>

                <div className="right">
                  <div>
                    <div className = "user-name">{this.props.username}</div>
                  </div>
                  <div className="levelXp" style={levelXpStyle}>
                    <div className="totalXp" style={totalXpStyle}>
                    <div className="label" style={levelXpStyle}>{`${this.props.totalXp} / ${this.props.totalXp + this.props.remainingXp} XP`}</div>
                    </div>
                  </div>
                </div>
            </div>
        )
    }
})
