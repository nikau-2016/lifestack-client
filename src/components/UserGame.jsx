import React from 'react'

export default React.createClass({
    props: {
        level: React.PropTypes.number.isRequired,
        totalXp: React.PropTypes.number.isRequired,
        remainingXp: React.PropTypes.number.isRequired
    },
    render () {
        return (
            <div className = "user-game">
                <p className = "level">{this.props.level}</p>
                <p className = "totalXp">{this.props.totalXp}</p>
                <p className = "remainingXp">{this.props.remainingXp}</p>
            </div>
        )
    }
})
