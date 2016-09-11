import React from 'react'
import {Link} from 'react-router'
import Dropdown from 'react-dropdown'
import request from 'superagent'

export default React.createClass({
  props: {
    onSkillSelect: React.PropTypes.func.isRequired,
    onLogin: React.PropTypes.func.isRequired,
    onRegister: React.PropTypes.func.isRequired,
    onProfile: React.PropTypes.func.isRequired
  },
  getInitialState () {
    return {
      options: [],
      username: "",
      password: ""
    }
  },
  componentDidMount () {
    request
      .get("http://localhost:3000/v1/skills")
      .end((err, res) => {
        if (err) {
          return
        }
        this.setState({options: createOptions(res.body.data)})
      })
  },
  onClickLogin () {
    this.props.onLogin(this.state.username, this.state.password)
    this.setState({username: "", password: ""})
  },
  render () {
    return (
      <div>
        <header>
          <h1><Link to={'/'}>#ADULTING</Link></h1>
          <a href="/auth/twitter">Sign Up with Twitter</a>
          <button onClick={this.props.onProfile}>Profile</button>
          <div>
            <Dropdown options={this.state.options} onChange={this.props.onSkillSelect}
            value={this.state.options[0]} placeholder="Select an option" />
          </div>
        </header>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
})

function createOptions (data) {
  const dropdown = data.map(elem => elem.category)
                      .filter((elem, i, ar) => ar.indexOf(elem) === i)
                      .map(elem => makeCategory(elem))

  data.forEach(elem => {
    dropdown.forEach((category, i) => {
      if (elem.category === category.name) {
        dropdown[i].items.push(makeOption(elem.id, elem.skillName))
      }
    })
  })

  return [{ value: '0', label: 'Select a skill' }, ...dropdown]
}

function makeCategory (categoryName) {
  return {
    type: 'group', name: categoryName, items: []
  }
}

function makeOption (id, skillName) {
  return { value: id, label: skillName}
}
