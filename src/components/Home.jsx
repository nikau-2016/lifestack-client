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
                <section className="mission-statement"> Rub face on everything
                    scratch leg; meow for can opener to feed me or chase laser
                    and curl into a furry donut so purr for no reason claw
                    drapes chase dog then run away.
                </section>
                <section className="top-video">
                    <h1>Top videos</h1>
                    <TopVideos />
                </section>
                <section className="About">
                    Rub face on everything scratch leg; meow for can opener to
                    feed me or chase laser and curl into a furry donut so purr
                    for no reason claw drapes chase dog then run away. Refuse
                    to drink water except out of someone's glass hide at bottom
                    of staircase to trip human, stare at ceiling light or eat
                    the fat cats food meowwww and behind the couch. All of a
                    sudden cat goes crazy who's the baby intrigued by the shower.
                    Russian blue cats secretly make all the worlds muffins find
                    empty spot in cupboard and sleep all day. Step on your
                    keyboard while you're gaming and then turn in a circle
                    get video posted to internet for chasing red dot meow to be
                    let out for licks your face but sleep on dog bed, force dog
                    to sleep on floor cats making all the muffins lay on arms
                    while you're using the keyboard. Slap owner's face at 5am
                    until human fills food dish. Pee in human's bed until he
                    cleans the litter box ears back wide eyed all of a sudden
                    cat goes crazy, for behind the couch. Caticus cuteicus paw
                    at beetle and eat it before it gets away you call this cat
                    food? tuxedo cats always looking dapper stare at wall turn
                    and meow stare at wall some more meow again continue staring
                    intently stare at the same spot.
                </section>
            </div>
        )
    }
})
