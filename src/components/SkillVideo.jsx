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
          <p className="votes">{this.props.video.votes} votes</p>
          <iframe src={this.props.video.url} width="1280" height="720" allowFullScreen></iframe>
          <Link to={`/contributor/${this.props.video.user_details.user_id}`} className="username">Uploaded by {this.props.video.user_details.username}</Link>
        </div>
      )
    } else {
      return (
        <div className="skill-video">
          <div className="voting-box">
            <input type="image" img id={this.props.video.id}
            className="upvote"
            src="./images/up.png"
            onClick={this.props.onUpvote} />
            <p className="votes">{this.props.video.votes} votes</p>
            <input type="image" id={this.props.video.id}
            className="downvote"
            src="./images/down.png"
            onClick={this.props.onDownvote} />
          </div>
          <iframe src={this.props.video.url} width="1280" height="720" allowFullScreen></iframe>
          <Link to={`/contributor/${this.props.video.user_details.user_id}`} className="username">Uploaded by {this.props.video.user_details.username}</Link>
        </div>
      )
    }
  }
})
