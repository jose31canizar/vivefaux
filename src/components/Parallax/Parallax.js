import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Parallax extends Component {
  constructor(props) {
    super(props)
    this.state = {
      distance: 0
    }
    this.update = this.update.bind(this)
  }
  componentWillMount() {
    window.addEventListener('scroll', this.update)
  }
  update() {
    console.log(document.body.scrollTop);

    this.setState((prevState, props) => {
      return {
        distance: document.body.scrollTop/15
      }
    })
  }
  render() {
    let src = this.props.src;

    let styles;
    if(src) {
      styles = {
            background: "url(" + src + ")",
            backgroundAttachment: "relative",
            backgroundPosition: "50% " + this.state.distance + "%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "500%"
      };
    } else {
      styles = {
            background: "white"
      };
    }
    return (
      <div className="parallax" style={styles}>
      </div>
    );
  }
}

export default Parallax;
