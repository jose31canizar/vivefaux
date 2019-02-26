import React, { Component } from "react";
import NewsData from "../constants/news-feed.json";
import LabelGrid from "../components/label-grid";
import Post from "../components/post";
import "./index.styl";

export default class Home extends Component {
  state = {
    labelOpen: false,
    posts: [
      {
        title: "Origin",
        date: "8 - 22 - 17",
        description:
          "Vivefaux announces the release of Origin, a collaborative project stringing together various sounds from the Vivefaux collective.",
        links: [
          {
            name: "Spotify",
            url: "https://open.spotify.com/album/7zUX1w4MfJdLWFhUv0JpDY"
          }
        ],
        iframes: ["https://open.spotify.com/embed/album/7zUX1w4MfJdLWFhUv0JpDY"]
      },
      {
        title: "Origin",
        date: "8 - 22 - 17",
        description:
          "Vivefaux announces the release of Origin, a collaborative project stringing together various sounds from the Vivefaux collective.",
        links: [
          {
            name: "Spotify",
            url: "https://open.spotify.com/album/7zUX1w4MfJdLWFhUv0JpDY"
          }
        ],
        iframes: ["https://open.spotify.com/embed/album/7zUX1w4MfJdLWFhUv0JpDY"]
      },
      {
        title: "Origin",
        date: "8 - 22 - 17",
        description:
          "Vivefaux announces the release of Origin, a collaborative project stringing together various sounds from the Vivefaux collective.",
        links: [
          {
            name: "Spotify",
            url: "https://open.spotify.com/album/7zUX1w4MfJdLWFhUv0JpDY"
          }
        ],
        iframes: ["https://open.spotify.com/embed/album/7zUX1w4MfJdLWFhUv0JpDY"]
      }
    ]
  };
  componentDidMount() {
    // loadPosts().then(posts => {
    //   console.log(posts);
    //   this.setState({ posts });
    // });
  }
  render() {
    const { labelOpen, posts } = this.state;
    return (
      <div class={`home ${labelOpen ? "label-open" : ""}`}>
        <div class="left-panel">
          <LabelGrid
            enableScroll={() => this.setState({ labelOpen: false })}
            disableScroll={() => this.setState({ labelOpen: true })}
          />
          <iframe
            src="//lightwidget.com/widgets/e750d4a7bf8b5bc690fc97adac21cc35.html"
            scrolling="no"
            allowtransparency="true"
            class="lightwidget-widget"
            style={{
              width: "100%",
              border: 0,
              overflow: "hidden",
              padding: "1rem"
            }}
          />
        </div>

        <div class="news-feed">
          {posts.map((props, i) => (
            <Post key={`post-${i}`} {...props} />
          ))}
        </div>
      </div>
    );
  }
}
