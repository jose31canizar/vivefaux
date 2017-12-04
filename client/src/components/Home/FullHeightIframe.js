import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class FullHeightIframe extends Component {
  render() {
    return (
      <iframe
        width="100%"
        height="450"
        scrolling="yes"
        frameBorder="no"
        src={this.props.iframe}>
      </iframe>
    );
  }
}
