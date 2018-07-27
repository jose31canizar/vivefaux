import React, { Component } from "react";
import Header from "../Header/Header";
import Parallax from "../Parallax/Parallax";
import FeaturedFeed from "../../data/featured-feed.json";
import "./Featured.styl";

export default class Featured extends Component {
  render() {
    return (
      <div className="featured">
        <Header title="Featured Albums">
          <Parallax src={require("../../img/parallax/1.jpg")} yPosition="100" />
        </Header>
        {FeaturedFeed.map((featuredItem, i) => (
          <div className="featured-album">
            <a className="featured-image" href={featuredItem.link}>
              <img src={featuredItem.image} />
            </a>
            <h1>{featuredItem.title}</h1>
            <p>{featuredItem.description}</p>
          </div>
        ))}
      </div>
    );
  }
}
