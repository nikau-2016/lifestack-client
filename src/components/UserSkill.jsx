import React from 'react'
import {TwitterButton} from 'react-social-buttons'

export default React.createClass({
  props: {
    id: React.PropTypes.number.isRequired,
    skillName: React.PropTypes.string.isRequired,
    status: React.PropTypes.string.isRequired,
    skillXp: React.PropTypes.number.isRequired,
    showcaseURL: React.PropTypes.string.isRequired
  },
  render() {
    return(
          <tr className="user-skill" id={this.props.id}>
            <th>{this.props.skillName}</th>
            <td>{this.props.difficulty}</td>
            <td>{this.props.status}</td>
            <td>{this.props.skillXp}</td>
            <td>{this.props.showcaseURL}</td>
            <td>
              <TwitterButton
                url="http://localhost:5000/#/search"
                text={`I've just learned ${this.props.skillName} #adulting # lifestack`} />
            </td>
          </tr>
    )
  }
})
