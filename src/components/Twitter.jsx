import ReactDOM from 'react-dom'
import React, { Component, PropTypes } from 'react'
import {
  TwitterButton
} from 'react-social-buttons'

class TestComponent extends Component {

  isBrowser () {
    return !(typeof document === "undefined" || typeof window === "undefined");
  }
  
  render () {
    let url = ''
    if (this.isBrowser()) { url = window.location.href; }

    return (
      <div id="buttons">
      <TwitterButton url={url} text="this page is cool"/>
      </div>
    )
  }
}
