import React, { Component } from "react";
import { getPage } from "../../../firebase/storage";
import { convertFromRaw, ContentState } from "draft-js";
import { stateToHTML } from "draft-js-export-html";
import "./index.styl";

export default class DisplayTemplate extends Component {
  state = {
    content: ""
  };
  componentDidMount() {
    const { path } = this.props;
    const content = getPage(path).then(data => {
      if (data) {
        this.setState({
          content: stateToHTML(convertFromRaw(data))
        });
      }
    });
  }
  render() {
    const { content } = this.state;
    const { title } = this.props;

    if (!content) {
      return (
        <div>
          <p>Loading...</p>
        </div>
      );
    }

    return (
      <div class="display-template">
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    );
  }
}
