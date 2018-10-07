import React, { Component } from "react";
import Loadable from "react-loadable";
import DOMPurify from "dompurify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./LabelPanel.styl";

const Loading = () => (
  <div>
    <h2>Loading...</h2>
  </div>
);

export default class LabelPanel extends Component {
  state = {
    Content: null
  };
  componentDidMount() {
    this.loadLabel(this.props.name);
  }
  loadLabel = name =>
    import(`../../data/${name}.md`).then(loaded =>
      this.setState({
        Content: (
          <article
            class="right-side"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(loaded.default, {
                ALLOWED_TAGS: ["iframe", "h1", "h2", "h3", "b", "p", "hr"]
              })
            }}
          />
        )
      })
    );
  render() {
    const {
      title,
      description,
      soundcloud,
      name,
      onMouseDown,
      onTouchEnd
    } = this.props;
    return (
      <div class="label-panel">
        <div class="left-side">
          <FontAwesomeIcon
            icon="times"
            color="white"
            style={{ width: 40, height: 40 }}
            onMouseDown={onMouseDown}
            onTouchEnd={onTouchEnd}
          />
          <h1>{title}</h1>
          <p>{description}</p>
          <a href={soundcloud}>soundcloud</a>
        </div>
        {this.state.Content}
      </div>
    );
  }
}
