import React from 'react'

export default React.createClass({
    props: {
        url: React.PropTypes.string.isRequired,
        skillname: React.PropTypes.string.isRequired
    },
    render () {
        return (
            <div className="top-videos">
            <iframe src={this.props.url} allowFullScreen></iframe>
            <p className="skill-name">{this.props.skillname}</p>
            <iframe src={this.props.url} allowFullScreen></iframe>
            <p className="skill-name">{this.props.skillname}</p>
            <iframe src={this.props.url} allowFullScreen></iframe>
            <p className="skill-name">{this.props.skillname}</p>
            </div>
        )
    }
})
