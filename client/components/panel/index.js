import React, { Component } from "react";
// import Loadable from "react-loadable";
import { connect } from "react-redux";
import { loadPostsByTag } from "~/actions/posts";
import DOMPurify from "dompurify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Post from "~/components/post";
import "./index.styl";

const Loading = () => (
  <div>
    <h2>Loading...</h2>
  </div>
);

class Panel extends Component {
  async componentDidMount() {
    this.props.loadPostsByTag(this.props.name);
  }
  render() {
    const {
      title,
      description,
      soundcloud,
      name,
      onMouseDown,
      onTouchEnd,
      posts
    } = this.props;

    return (
      <div className="panel">
        <div className="left-side">
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
        <div className="right-side">
          {posts ? (
            posts.map(post => <Post key={`${name}-posts`} {...post} />)
          ) : (
            <Loading />
          )}
        </div>
      </div>
    );
  }
}

export default connect(
  ({ posts }, props) => ({ posts: posts[props.name] }),
  dispatch => ({ loadPostsByTag: tag => dispatch(loadPostsByTag(tag)) })
)(Panel);
