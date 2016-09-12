import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
  props: {
    onLogout: React.PropTypes.func.isRequired,
    onProfile: React.PropTypes.func.isRequired,
    userId: React.PropTypes.number.isRequired
  },
  render () {
    if (this.props.userId === 0) {
      return (
        <div>
          <header>
            <h1><Link to={'/'}>#ADULTING</Link></h1>
            <Link to={'/search'}>Search</Link>
            <a href="http://localhost:3000/auth/twitter">Log in with Twitter</a>
          </header>
          <div>
            {this.props.children}
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <header>
            <h1><Link to={'/'}>#ADULTING</Link></h1>
            <Link to={'/search'}>Search</Link>
            <button onClick={this.props.onProfile}>Profile</button>
            <button onClick={this.props.onLogout}>Logout</button>
          </header>
          <div>
            {this.props.children}
          </div>
        </div>
      )
    }
  }
})

//
//                                       888               888
//                                       888               888
//                                       888               888
//  888  888  888  .d88b.  88888b.d88b.  88888b.   8888b.  888888
//  888  888  888 d88""88b 888 "888 "88b 888 "88b     "88b 888
//  888  888  888 888  888 888  888  888 888  888 .d888888 888
//  Y88b 888 d88P Y88..88P 888  888  888 888 d88P 888  888 Y88b.
//    "Y8888888P"  "Y88P"  888  888  888 88888P"  "Y888888  "Y888
