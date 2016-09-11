import React from 'react'
import Tab from './Tab'

export default React.createClass({
    props: {
        skill: React.PropTypes.object.isRequired,
        onWatchedSkill: React.PropTypes.func.isRequired
    },
    render () {
        return <section>
                <h1>{this.props.skill.skillName}</h1>
                <h3>{this.props.skill.category}</h3>
                <button name={this.props.skill.id} onClick={this.props.onWatchedSkill}>Got It!</button>
                <Tab videos={this.props.skill.videos} />
            </section>
        }
    })
