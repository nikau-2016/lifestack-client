import React from 'react'
import TopVideos from './TopVideos'
import { Timeline } from 'react-twitter-widgets'

export default React.createClass({
    props: {
      error: React.PropTypes.string.isRequired
    },
    getInitialState () {
        return {
            topVideos: []
        }
    },
    render () {
        return (
            <div className="Home row">
                <div className="error">{this.props.error}</div>
                <div className="banner row">
                  <section className="mission-statement four columns"> "Life skills for millenials". Whether you need to fix, build, create or learn. Lifestack gives you practical solutions to the problems life throws at you."
                  </section>
                </div>
                <section className="top-videos row">
                    <h3 className="top-videos-heading-three-columns">Top videos</h3>
                    <TopVideos />
                </section>
                <div className="about row">
                        <div className="about-paragraph1 four columns">
                        Whether you want to master the art of cooking an egg, become a pro at changing a tyre or simply learn a new skill, #adulting provides the tools and resources to move you through your 20's with ever increasing confidence. #adulting is a platform for millennials to upload, share and view tutorial style videos of themselves attempting to master simple life skills they never learned in school.</div>

                    <div className="about-paragraph2 four columns">
                         #adulting is gamified; there are three levels and members earn points via a time-tested, patented process of watch, contribute and master. #adulting empowers you to progressively solve new challenges and make your life simpler and more satisfying.
                    </div>
                    <div className="four columns">
                    <Timeline
                        className="twitterBox"
                        widgetId={'775532588731478016'}
                        options={{
                        height: '400'
                        }}
                    />
                    </div>
                </div>
            </div>
        )
    }
})
