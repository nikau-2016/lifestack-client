import React from 'react'
import TopVideos from './TopVideos'
import { Timeline } from 'react-twitter-widgets'

export default React.createClass({
    getInitialState () {
        return {
            topVideos: []
        }
    },
    render () {
        return (
            <div className="Home row">
                <div className="banner row">
                  <section className="mission-statement four columns"> "Life skills for millenials". Whether you need to fix, build, create or learn. Lifestack gives you practical solutions to the problems life throws at you."
                  </section>
                </div>
                <section className="About row">
                    We empower you to efficiently solve each new challenge and make your life better and easier.
                    Content made by real people for real people. We are a bunch of passionate,
                 creative, seriously, cool folks who put the "do" in "do-it-yourself".
                Showcasing some of the best video content out there,
                 we wish to help put more pizzazz in your everyday life! Enjoy.
                </section>
                <section className="top-videos row">
                    <h3 className="top-videos-heading">Top videos</h3>
                    <TopVideos />
                </section>
                <div>
                    <Timeline
                        className="twitterBox row"
                        widgetId={'775532588731478016'}
                        options={{
                        height: '400'
                        }}
                    />
                </div>
            </div>
        )
    }
})
