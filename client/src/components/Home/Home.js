import React, { Component } from 'react'
import data from '../../data/sections'
import Section from '../Section/Section'
import Labels from '../Labels/Labels'
import Header from '../Header/Header';
import Parallax from '../Parallax/Parallax'
import NewsFeed from '../../data/news-feed.json'
import FullHeightIframe from './FullHeightIframe'
import './Home.styl'

class Home extends Component {
  resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
  }
  render() {
    return (
      <div className='home-page'>
      <Header>
        <Parallax src={require('../../img/parallax/1.jpg')} yPosition="100"/>
      </Header>
        <div className='news-feed'>
        {NewsFeed.map((item, i) => (
          <div className='text-block'>
            <div className='text-block-header'>
              <h3>{item.title}</h3>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"/>
              </svg>
            </div>
            <h4>{item.date}</h4>
            <p>{item.description}</p>
            {item.links.map((link, i) => (
              <p><a href={link.link}>{link.name}</a></p>
            ))}
            <FullHeightIframe iframe={item.iframe}/>
          </div>
        ))}
        </div>
        <Labels header={false}/>
      </div>
    );
  }
}

export default Home;
