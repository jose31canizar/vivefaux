import React, { Component } from "react";
import { connect } from "react-redux";
import LabelGrid from "../components/grid";
import Post from "../components/post";
import { loadPosts } from "~/actions/posts";
import "./index.styl";

class Home extends Component {
  state = {
    labelOpen: false
  };
  // static getInitialProps({ reduxStore }) {
  //   reduxStore.dispatch(loadPosts());

  //   return {};
  // }
  async componentDidMount() {
    this.props.loadPosts();
  }
  render() {
    const { labelOpen } = this.state;
    const { posts } = this.props;

    return (
      <div className={`home ${labelOpen ? "label-open" : ""}`}>
        <div className="left-panel">
          <LabelGrid
            enableScroll={() => this.setState({ labelOpen: false })}
            disableScroll={() => this.setState({ labelOpen: true })}
          />
          <iframe
            src="//lightwidget.com/widgets/e750d4a7bf8b5bc690fc97adac21cc35.html"
            scrolling="no"
            allowtransparency="true"
            className="lightwidget-widget"
            style={{
              width: "100%",
              border: 0,
              overflow: "hidden",
              padding: "1rem"
            }}
          />
        </div>

        <div className="recent-releases">
          {posts &&
            posts.map((props, i) => <Post key={`post-${i}`} {...props} />)}
        </div>
      </div>
    );
  }
}

export default connect(
  ({ posts }) => ({ posts: posts.posts }),
  dispatch => ({ loadPosts: () => dispatch(loadPosts()) })
)(Home);
