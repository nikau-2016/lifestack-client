import React from 'react'

export default React.createClass({
    props: {
        level: React.PropTypes.number.isRequired,
        totalXP: React.PropTypes.number.isRequired,
        remainingXP: React.PropTypes.number.isRequired
    },
    render () {
        return (
            <div className = "user-game">
                <p className = "level">{this.props.level}</p>
                <p className = "totalXP">{this.props.totalXP}</p>
                <p className = "remainingXP">{this.props.remainingXP}</p>
            </div>
        )
    }
})
