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
                <img class="banner-image" src="styles/images/group-of-millenials.jpg"></img>
                <section className="mission-statement"> "Life skills for millenials"<br></br>Whether you need to fix, build, create or learn<br></br>Lifestack gives you practical solutions<br></br> to the problems life throws at you.<br />
                </section>
                <section className="About">
                    We empower you to efficiently solve each new challenge and make your life better and easier.
                    Content made by real people for real people. We are a bunch of passionate,
                 creative, seriously, cool folks who put the "do" in "do-it-yourself".
                Showcasing some of the best video content out there,
                 we wish to help put more pizzazz in your everyday life! Enjoy.
                </section>
                <section className="top-videos">
                    <h3>Top videos</h3>
                    <TopVideos />
                </section>
            </div>
        )
    }
})
