import React from 'react'

export default React.createClass({
    props: {
        About: React.PropTypes.string.isRequired

    },
    render () {
        return (
            <div className="About">
                <p className="About">{this.props.about}</p>
            </div>
        )
    }
})
