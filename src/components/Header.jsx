import React from 'react'
import {Link} from 'react-router'

export default (props) => {
  return (
    <div>
      <header>
        <p>Placeholder for Header</p>
        <Link to={'/'}>Home</Link>
        <Link to={'/profile'}>Profile</Link>
        <Link to={'/search'}>Search</Link>
      </header>
      <div>
        {props.children}
      </div>
    </div>
  )
}
