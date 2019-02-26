import React from 'react'
import './Audio.styl'

const Audio = (props) => (
  <audio controls>
  <source src="horse.ogg" type="audio/ogg"/>
  <source src="horse.mp3" type="audio/mpeg"/>
  Your browser does not support the audio element.
  </audio>
)

export default Audio
