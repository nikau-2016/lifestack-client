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
            <h1><Link className="heading" to={'/'}>#adulting</Link></h1>
            <div className="buttons">
              <button><Link className="search-home" to={'/search'}>Search</Link></button>
              <button><a className="twitter-sign-in" href="http://adulting-server.herokuapp.com/auth/twitter">Log in with Twitter</a></button>
            </div>
          </header>
          {this.props.children}
          <footer>
            Check out our code on Github! <br />
            <a href="https://github.com/nikau-2016/lifestack.git">Back-End</a>
            <a href="https://github.com/nikau-2016/lifestack-client.git">Front-End</a>
          </footer>
        </div>
      )
    } else {
      return (
        <div>
          <header>
            <h1><Link to={'/'}>#adulting</Link></h1>
            <div className="buttons">
            <button><Link className="search-home" to={'/search'}>Search</Link></button>
              <div>
                <button onClick={this.props.onProfile}>Profile</button>
                <button onClick={this.props.onLogout}>Logout</button>
              </div>
            </div>
          </header>
          {this.props.children}
          <footer className="footer">
            Check out our code on Github! <br />
            <a href="https://github.com/nikau-2016/lifestack.git">Back-End</a>
            <a href="https://github.com/nikau-2016/lifestack-client.git">Front-End</a>
          </footer>
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
