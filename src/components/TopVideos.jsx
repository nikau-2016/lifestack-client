import React from 'react'
import request from 'superagent'

export default React.createClass({
    getInitialState () {
        return {
            topVideos: []
        }
    },
    componentWillMount () {
        request
            .get("http://localhost:3000/v1/skills/top3")
            .end((err, res) => {
                if (err) {
                    return
                }
                this.setState({
                    topVideos: res.body
                })
            })
    },
    render () {
        const videos = this.state.topVideos.map((elem) => {
            return (
                <div key={elem.id}>
                    <iframe src={elem.url} allowFullScreen></iframe>
                    <p className="skill-name">{elem.skillName}</p>
                </div>
            )
        })
        return (
            <div className="top-videos">
                {videos}
            </div>
        )
    }
})
