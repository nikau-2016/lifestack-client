import React from 'react'
import {Link} from 'react-router'

export default (props) => {
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
            <button className="skills-btn">Skills</button>
            <button className="catagories-btn">Catagories</button>
            <hr />
      </header>
      <div>
        {props.children}
      </div>
    </div>
  )
}
