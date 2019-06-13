import React, { Component } from "react";
import "./index.styl";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fill: "transparent",
      stroke: "black"
    };
  }

  render() {
    const { color, direction, onMouseDown } = this.props;
    const { fill, stroke } = this.state;
    let degrees;
    switch (direction) {
      case "left":
        degrees = 90;
        break;
        break;
      case "right":
        degrees = -90;
        break;
      case "down":
        degrees = 0;
        break;
      default:
        degrees = 180;
        break;
    }
    return (
      <svg
        className="arrow"
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        style={{ transform: `rotate3d(0,0,1,${degrees}deg)`, width: "100%" }}
        onMouseOut={() =>
          this.setState({ fill: "transparent", stroke: "black" })
        }
        onMouseOver={() => this.setState({ fill: color, stroke: color })}
        onMouseDown={onMouseDown}
      >
        <path
          d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"
          fill={fill}
          stroke={stroke}
        />
      </svg>
    );
  }
}
