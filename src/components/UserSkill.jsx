import React from 'react'
import {TwitterButton} from 'react-social-buttons'

export default React.createClass({
  props: {
    id: React.PropTypes.number.isRequired,
    skillName: React.PropTypes.string.isRequired,
    status: React.PropTypes.string.isRequired,
    skillXp: React.PropTypes.number.isRequired,
    showcaseURL: React.PropTypes.string.isRequired,
    video: React.PropTypes.number.isRequired,
    onDelete: React.PropTypes.func.isRequired
  },
  render() {
    if (this.props.showcaseURL && this.props.video[0]) {
      return (
            <tr className="user-skill" id={this.props.id}>
              <td><span onClick={this.props.onSkill} id={this.props.id} name={this.props.showcaseURL}>
                    {this.props.skillName}
                </span>
              </td>
              <td>{this.props.difficulty}</td>
              <td>{this.props.status}</td>
              <td>{this.props.skillXp}</td>
              <td>{this.props.showcaseURL}
                    <img id={this.props.id}
                               className="deletebutton"
                               src="./images/del32.png"
                               id={this.props.video[0].video_id}
                               onClick={this.props.onDelete} />
              </td>
              <td>
                <TwitterButton
                  url={`http://localhost:5000/#/search/${this.props.id}`}
                  text={`I've just learned ${this.props.skillName} #adulting # lifestack`} />
              </td>
            </tr>
      )
    } else {
      return (
            <tr className="user-skill" id={this.props.id}>
              <td>{this.props.skillName}</td>
              <td>{this.props.difficulty}</td>
              <td>{this.props.status}</td>
              <td>{this.props.skillXp} XP</td>
              <td></td>
              <td>
                <TwitterButton
                  url={`http://localhost:5000/#/search/${this.props.id}`}
                  text={`I've just learned ${this.props.skillName} #adulting # lifestack`} />
              </td>
            </tr>
      )
    }
  }
})
