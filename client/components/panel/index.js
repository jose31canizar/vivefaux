import React, { Component } from "react";
// import Loadable from "react-loadable";
import { compose } from "redux";
import { connect } from "react-redux";
import { loadPostsByTag } from "~/actions/posts";
import withSize from "~/hocs/withSize";
import DOMPurify from "dompurify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Post from "~/components/post";
import styled from "styled-components";
import LoadingContent from "~/components/loading-content";
import Box from "~/components/box";
import LoadingSpinner from "~/components/loading-spinner";
import "./index.styl";

const PanelContent = styled(Box)`
  padding: 10rem 5rem;
  width: 50%;
  overflow-y: scroll;

  iframe {
    width: 100%;
  }

  h1,
  h2,
  p,
  a {
    color: white;
  }

  h2 {
    color: #d68280;
  }

  @media all and (max-width: 64rem) {
    width: 100%;
  }
`;

class Panel extends Component {
  state = {
    scroll: 50
  };
  async componentDidMount() {
    this.props.loadPostsByTag(this.props.name);
    this.panelContent.addEventListener(
      "scroll",
      function(e) {
        // console.log(this.panelContent.scrollTop);

        this.setState(prev => ({
          scroll: -(this.panelContent.scrollTop ** 0.65) + 50
        }));
      }.bind(this)
    );
  }
  render() {
    const {
      title,
      description,
      soundcloud,
      name,
      onMouseDown,
      onTouchEnd,
      posts,
      width,
      isLoading
    } = this.props;
    const { scroll } = this.state;

    return (
      <div className="panel">
        <div
          className="left-side"
          style={{
            transform: `translate3d(0,${width > 1126 ? 0 : scroll}px,0)`,
            opacity: width > 1126 ? 1 : scroll / 25 - 1
          }}
        >
          <FontAwesomeIcon
            icon="times"
            color="white"
            style={{ width: 40, height: 40 }}
            onMouseDown={onMouseDown}
            onTouchEnd={onTouchEnd}
          />
          <h1>{title}</h1>
          <p>{description}</p>
          {soundcloud ? <a href={soundcloud}>soundcloud</a> : null}
        </div>
        <PanelContent
          ref={r => (this.panelContent = r)}
          justifyContent={isLoading ? "center" : "flex-start"}
        >
          <LoadingContent isLoading={isLoading} spinner={<LoadingSpinner />}>
            {posts &&
              posts.map((post, i) => (
                <Post key={`${name}-${i}-posts`} {...post} />
              ))}
          </LoadingContent>
        </PanelContent>
      </div>
    );
  }
}

export default compose(
  withSize,
  connect(
    ({ posts }, props) => ({
      isLoading: posts.isLoading,
      posts: posts[props.name]
    }),
    dispatch => ({ loadPostsByTag: tag => dispatch(loadPostsByTag(tag)) })
  )
)(Panel);
