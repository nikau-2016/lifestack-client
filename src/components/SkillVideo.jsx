import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
  props: {
    user: React.PropTypes.object.isRequired,
    video: React.PropTypes.func.isRequired,
    onUpvote: React.PropTypes.func.isRequired,
    onDownvote: React.PropTypes.func.isRequired
  },
  render () {
    if (this.props.user.id === 0) {
      return (
        <div className="skill-video">
          <iframe src={this.props.video.url} allowFullScreen></iframe>
          <Link to={`/contributor/${this.props.video.user_details.user_id}`} className="username">Uploaded by {this.props.video.user_details.username}</Link>
          <p className="votes">{this.props.video.votes} votes</p>
        </div>
      )
    } else {
      return (
        <div className="skill-video">
          <iframe src={this.props.video.url} allowFullScreen></iframe>
          <Link to={`/contributor/${this.props.video.user_details.user_id}`} className="username">Uploaded by {this.props.video.user_details.username}</Link>
          <div>
            <img id={this.props.video.id}
                 className="upvote"
                 src="./images/up.png"
                 onClick={this.props.onUpvote} />

            <img id={this.props.video.id}
                 className="downvote"
                 src="./images/down.png"
                 onClick={this.props.onDownvote} />
          </div>
          <p className="votes">{this.props.video.votes} votes</p>
        </div>

      )
    }
  }
})
