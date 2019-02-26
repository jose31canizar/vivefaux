import React, { Component } from "react";
import { Link } from "react-router-dom";
import { DefaultPlayer as Video } from "react-html5video";
import videoConnect from "react-html5video";
import "react-html5video/dist/styles.css";
import movie from "../../movies/Savior_3.mp4";
import "./index.styl";
const CustomVideoPlayer = ({ video, videoEl, children, ...restProps }) => (
  <div class="video-player">
    <video
      style={{ width: "100%" }}
      controls={true}
      seekable
      preload
      {...restProps}
    >
      {/* <source src={require("../../movies/Savior_2.mp4")} type="video/mp4" /> */}
      <source src={movie} type="video/mp4" />
      {children}
    </video>
  </div>
);

const VideoPlayer = videoConnect(CustomVideoPlayer);

export default class extends Component {
  render() {
    return (
      <div class="trailer">
        <VideoPlayer />
        <h3>Savior Behavior</h3>
        <h5>Jess G</h5>
        <h4>Dec. 1st</h4>

        <Link to="home">Home</Link>
      </div>
    );
  }
}
