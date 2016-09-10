import React from 'react'
import TopVideos from './TopVideos'

export default React.createClass({
    getInitialState () {
        return {
            topVideos: []
        }
    },
    render () {
        return (
            <div className="Home">
                <section className="mission-statement"> "Life skillz got da millenials sorted. Whether you need to fix, build, create or learn, Lifestack gives you practical solutions to the problems life throws at you. We empower you to efficiently solve each new challenge and make your life better and easier."
                </section>
                <section className="top-video">
                    <h3>Top videos</h3>
                    <TopVideos />
                </section>
                <section className="About">
                    Content made by real people for real people. We are a bunch of passionate, creative, seriously, cool folks who put the "do" in "do-it-yourself". Showcasing some of the best video content out there, we wish to help put more pizzazz in your everyday life! Enjoy.
                </section>
            </div>
        )
    }
})
