import React, { Component } from "react";
import data from "../../data/sections";
import Section from "../Section/Section";
import Header from "../Header/Header";
import Parallax from "../Parallax/Parallax";
import "./About.styl";
import ARTISTS from "../../data/artists.json";

class About extends Component {
  render() {
    return (
      <div className="about-page">
        <Header title="about">
          <Parallax src={require("../../img/parallax/5.jpg")} yPosition={50} />
        </Header>
        <div className="section">
          <div className="section-title">
            <h1>About</h1>
          </div>
          <div className="text-block-about">
            <h3>A collaborative project based out of Boulder, Colorado.</h3>
            <p>
              ViveFaux is a multimedia company formed in 2014 and based around
              the world. We are a group of several divisions including: Sōken
              Costa, Kamakura Records, the Blacq Label, and Infinite Vivacity
              Films.
            </p>
          </div>
        </div>
        {ARTISTS.map((artist, i) => (
          <div className="section">
            <div className="section-title">
              <h1>{artist.name}</h1>
            </div>
            <div className="text-block-about">
              <h3>{artist.role}</h3>
              <p>{artist.description}</p>
              <p>{artist.contact}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default About;
