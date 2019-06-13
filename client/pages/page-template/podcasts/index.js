import React, { Component } from "react";
import { connect } from "react-redux";
import Grid from "~/components/grid";
import Post from "~/components/post";
import { loadPosts } from "~/actions/posts";
import { SplitPage } from "~/components/split-page";
import styled from "styled-components";

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
        <RecentReleases>
          {posts &&
            posts.map((props, i) => <Post key={`post-${i}`} {...props} />)}
        </RecentReleases>
        <div className="left-panel">
          <Grid
            labels={[
              {
                title: "Podcast 1",
                name: "kamakura",
                description: "Artist Collective",
                soundcloud:
                  "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/180047651&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"
              },
              {
                title: "Podcast 2",
                name: "blacq",
                description: "Record Label",
                soundcloud:
                  "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/294337820&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"
              },
              {
                title: "Podcast 3",
                name: "soken",
                description: "Multimedia Platform",
                soundcloud: ""
              },
              {
                title: "Podcast 4",
                name: "",
                description: "",
                soundcloud: ""
              },
              {
                title: "Podcast 3",
                name: "soken",
                description: "Multimedia Platform",
                soundcloud: ""
              },
              {
                title: "Podcast 4",
                name: "",
                description: "",
                soundcloud: ""
              }
            ]}
            pageRef={this.home}
            enableScroll={() => this.setState({ labelOpen: false })}
            disableScroll={() => this.setState({ labelOpen: true })}
          />
        </div>
      </SplitPage>
    );
  }
}

export default connect(
  ({ posts }) => ({ posts: posts.all }),
  dispatch => ({ loadPosts: () => dispatch(loadPosts()) })
)(Home);
