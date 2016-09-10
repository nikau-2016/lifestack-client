import React from 'react'
import {Link} from 'react-router'
import Dropdown from 'react-dropdown'
import request from 'superagent'

export default React.createClass({
  props: {
    onSkillSelect: React.PropTypes.func.isRequired,
    onLogin: React.PropTypes.func.isRequired,
    onRegister: React.PropTypes.func.isRequired
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
  changeUsername (evt) {
    this.setState({username: evt.target.value})
  },
  changePassword (evt) {
    this.setState({password: evt.target.value})
  },
  render () {
    return (
      <div>
        <header>
          <h1><Link to={'/'}>#ADULTING</Link></h1>
            <Link to={'/profile'}>Profile</Link>
            <form>
              <input type="text" className="username" onChange={this.changeUsername} value={this.state.username} placeholder="Username" />
                <input type="text" className="password" onChange={this.changePassword} value={this.state.password} placeholder="Password" />
                <button className="login-btn" onClick={() => this.props.onLogin(this.state.username, this.state.password)} type="button">Login</button>
              </form>
              <button className="registerbtn" onClick={this.props.onRegister} type="button">Register</button>
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
