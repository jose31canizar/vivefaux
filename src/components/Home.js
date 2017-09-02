import React, { Component } from 'react'
import data from '../constants/sections'
import Section from './Section'
import Labels from './Labels'
import Header from './Header/Header';
import Parallax from './Parallax/Parallax'

class Home extends Component {
  render() {
    return (
      <div className='home-page'>
      <Header>
        <Parallax src={require('../img/parallax/1.jpg')} yPosition="100"/>
      </Header>
        <div className='news-feed'>
          <div className='text-block'>
            <h3>Nimbus</h3>
            <h4>8 - 22 - 17</h4>
            <p>The Blacq Label releases Wabaki's 'Nimbus' on soundcloud. The album features reflective symphonies such as 'Passive Thoughts' and dance anthems such as 'Danny Phantom' and 'I Need You.' Featured artists include Rainfish and Jeux. Nimbus is the second album released by the Blacq label. </p>
            <p><a href='https://soundcloud.com/blacqlabel/sets/wabakis-nimbus'>Soundcloud</a></p>
            <p><a href='https://www.toneden.io/wabaki303/post/nimbus'>Free Download</a></p>
            <iframe
              width="100%"
              height="450"
              scrolling="no"
              frameBorder="no"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/347203262&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true">
            </iframe>
          </div>
          <div className='text-block'>
          <h3>Origin</h3>
          <p>Vivefaux announces the release of <a href='https://soundcloud.com/'>Origin</a>, a collaborative project stringing together various sounds from the Vivefaux collective.</p>
          <p><a href='https://open.spotify.com/album/7zUX1w4MfJdLWFhUv0JpDY'>Spotify</a></p>
          <p>
            <iframe
              src="https://open.spotify.com/embed/album/7zUX1w4MfJdLWFhUv0JpDY"
              width="100%"
              height="380"
              frameBorder="0"
              allowTransparency="true">
            </iframe>
          </p>
          </div>
          <div className='text-block'>
            <h3>Kuro</h3>
            <p>Faux's Kuro is now available. Listen to it <a href='https://soundcloud.com/blacqlabel/sets/fauxs-kuro'>here</a>.</p>
            <p><a href='https://open.spotify.com/album/0OnItcODRp02QegmUnxTBA'>Spotify</a></p>
            <p><a href='https://soundcloud.com/blacqlabel/sets/fauxs-kuro'>Soundcloud</a></p>
          <p>
            <iframe
            width="100%"
            height="450"
            scrolling="no"
            frameBorder="no"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/313841302&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true">
            </iframe>
          </p>
          </div>
          <div className='text-block'>
            <h3>Passionfruit</h3>
            <p>Passionfruit by Wabaki now available to stream on the <a href='https://soundcloud.com/kamakurarecords/wabaki-passionfruit-prod-faux'>Kamakura soundcloud</a></p>
            <p><a href='https://soundcloud.com/kamakurarecords/wabaki-passionfruit-prod-faux'>Soundcloud</a></p>
            <p>
              <iframe
              width="100%"
              height="450"
              scrolling="no"
              frameBorder="no"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/321485477&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true">
              </iframe>
            </p>
          </div>
          <p></p>
        </div>
        <Labels header={false}/>
      </div>
    );
  }
}

export default Home;
