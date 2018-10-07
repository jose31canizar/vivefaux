import React, { Component } from "react";
import NewsData from "../../data/news-feed.json";
import LabelGrid from "../label-grid/LabelGrid";
import "./Home.styl";

export default class Home extends Component {
  state = {
    labelOpen: false
  };
  render() {
    const { labelOpen } = this.state;
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
          {NewsData.map(({ title, date, description, links, iframes }, i) => (
            <div key={`news-item-${i}`} class="news-item">
              <h2>{title}</h2>
              <p>{date}</p>
              <p>{description}</p>
              <p>
                {links.map((link, j) => (
                  <a key={link.name + j} href={link.url}>
                    {link.name}
                  </a>
                ))}
              </p>
              {iframes.map((iframe, i) => (
                <iframe
                  key={`iframe-${i}`}
                  width="100%"
                  height="300"
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay"
                  src={`${iframe}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
