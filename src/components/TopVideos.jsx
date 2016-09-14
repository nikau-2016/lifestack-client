import React from 'react'
import request from 'superagent'

const url = 'http://localhost:3000'

export default React.createClass({
    getInitialState () {
        return {
            topVideos: []
        }
    },
    componentWillMount () {
        request
            .get(`${url}v1/skills/top3`)
            .end((err, res) => {
                if (err) {
                    return
                }
                this.setState({
                    topVideos: res.body.data
                })
            })
    },
    render () {
        const videos = this.state.topVideos.map((elem, i) => {
            return (
                <div key={i}>
                    <iframe src={elem.url} height="400" width="500" allowFullScreen></iframe>
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
