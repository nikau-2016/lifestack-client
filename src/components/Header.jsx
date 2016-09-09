import React from 'react'
import {Link} from 'react-router'
import Dropdown from 'react-dropdown'
import request from 'superagent'

export default React.createClass({
  getInitialState () {
    return {
      options: []
    }
  },
  componentDidMount () {
    request
      .get("http://localhost:3000/v1/skills")
      .end((err, res) => {
        if (err) {
          return
        }
        console.log("options", createOptions(res.body.data))
        this.setState({options: createOptions(res.body.data)})
      })
  },
  onSelect (evt) {
    console.log(evt.value)
  },
  render () {
    return (
    <div>
      <header>
      <hr />
        <h1>#ADULTING</h1>
          <hr />
          <Link to={'/'}>Home</Link>
          <hr />
          <Link to={'/profile'}>Profile</Link>
          <hr />
          <Link to={'/search'}>Search</Link>
          <hr />
          <form>
            <input type="text" className="username" placeholder="UserName" />
              <hr />
              <input type="text" className="password" placeholder="Password" />
                <hr />
              <button className="login-btn" type="button">Login</button>
            </form>
            <hr />
            <button className="PLACEHOLDER-FOR-OAUTH-BUTTON" type="button">Register</button>
            <button className="catagories-btn">Catagories</button>
            <hr />
            <div>
              <Dropdown options={this.state.options} onChange={this.onSelect}
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
