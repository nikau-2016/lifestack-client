import React from 'react'
import ReactDisqusThread from 'react-disqus-thread'

export default React.createClass({
  props: {
    userId: React.PropTypes.number.isRequired,
    id: React.PropTypes.number.isRequired,
    url: React.PropTypes.string.isRequired,
    votes: React.PropTypes.number.isRequired,
    onUpvote: React.PropTypes.func.isRequired,
    onDownvote: React.PropTypes.func.isRequired
  },
  render () {
    if (this.props.userId === 0) {
      return (
        <div className="skill-video">
          <iframe src={this.props.url} allowFullScreen></iframe>
          <p className="votes">{this.props.votes} votes</p>
        </div>
      )
    } else {
      return (
        <div className="skill-video">
          <iframe src={this.props.url} allowFullScreen></iframe>
          <div>
            <img id={this.props.id}
                 className="upvote"
                 src="./images/up.png"
                 onClick={this.props.onUpvote} />

            <img id={this.props.id}
                 className="downvote"
                 src="./images/down.png"
                 onClick={this.props.onDownvote} />
             <ReactDisqusThread
             shortname="hashtagadulting-co-nz"
             identifier="hashtagadultingcmmntsbro"
             title="Post your comments here"
             url="http://localhost:5000" />
          </div>
          <p className="votes">{this.props.votes} votes</p>
        </div>
      )
    }
  }
})
