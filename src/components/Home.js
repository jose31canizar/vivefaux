import React, { Component } from 'react'
import data from '../constants/sections'
import Section from './Section'
import Labels from './Labels'

class Home extends Component {
  render() {
    return (
      <div className='home-page'>
        <div className='news-feed'>
          <div className='text-block'>
          <h3>Origin</h3>
          <p>Vivefaux announces the release of <a href='https://soundcloud.com/'>Origin</a>, a collaborative project stringing together various sounds from the Vivefaux collective.</p>
          <p><a href='https://open.spotify.com/album/7zUX1w4MfJdLWFhUv0JpDY'>Spotify</a></p>
          <p>
          <iframe
            src="https://open.spotify.com/embed/album/7zUX1w4MfJdLWFhUv0JpDY"
            width="100%"
            height="380"
            frameborder="0"
            allowtransparency="true">
          </iframe>
          <div class="tidal-embed" data-type="a" data-id="73741169"></div>
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
            frameborder="no"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/313841302&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true">
            </iframe>
            <div class="tidal-embed" data-type="a" data-id="72020749"></div>
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
            frameborder="no"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/321485477&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true">
            </iframe>
          </p>
          </div>
          <p></p>
        </div>
        <Labels/>
      </div>
    );
  }
}

export default Home;
