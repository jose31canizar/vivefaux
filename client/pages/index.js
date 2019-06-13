import React, { Component } from "react";
import { connect } from "react-redux";
import Grid from "../components/grid";
import Post from "../components/post";
import { loadPosts } from "~/actions/posts";
import { SplitPage } from "~/components/split-page";
import styled from "styled-components";
import Labels from "~/constants/labels";
import "./index.styl";

export const RecentReleases = styled.div`
  min-height: 0;
  height: 100vh;
  overflow scroll;

  & {
    @media all and (max-width: 64em) {
      height: auto;
    }
  }
`;

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
      <SplitPage
        id="home"
        className={`home ${labelOpen ? "label-open" : ""}`}
        ref={r => (this.home = r)}
      >
        <div className="left-panel">
          <Grid
            labels={Labels}
            pageRef={this.home}
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
        <RecentReleases>
          {posts &&
            posts.map((props, i) => <Post key={`post-${i}`} {...props} />)}
        </RecentReleases>
      </SplitPage>
    );
  }
}

export default connect(
  ({ posts }) => ({ posts: posts.all }),
  dispatch => ({ loadPosts: () => dispatch(loadPosts()) })
)(Home);
